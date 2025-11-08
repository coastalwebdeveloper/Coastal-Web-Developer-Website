import { supabase } from './supabase'

export interface Feedback {
  id: number;
  name: string;
  email?: string;
  rating: number;
  feedback: string;
  pinned: boolean;
  created_at?: string;
  updated_at?: string;
}

const defaultFeedbacks: Feedback[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    feedback: "Outstanding work on my restaurant website! Professional, responsive, and incredibly talented.",
    pinned: true
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    feedback: "Excellent service and great communication throughout the project. Highly recommend!",
    pinned: true
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 4,
    feedback: "Good quality work and delivered on time. Very satisfied with the results.",
    pinned: true
  },
  {
    id: 4,
    name: "John Smith",
    rating: 5,
    feedback: "Amazing experience! The team understood my requirements perfectly.",
    pinned: false
  }
];

export const getFeedbacks = async (): Promise<Feedback[]> => {
  try {
    const { data, error } = await supabase
      .from('feedback')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching feedback from Supabase:', error);
      return getFeedbacksFromLocalStorage();
    }
    
    return data || [];
  } catch (error) {
    console.error('Supabase connection failed:', error);
    return getFeedbacksFromLocalStorage();
  }
};

export const getPinnedFeedbacks = async (): Promise<Feedback[]> => {
  try {
    const { data, error } = await supabase
      .from('feedback')
      .select('*')
      .eq('pinned', true)
      .order('created_at', { ascending: false })
      .limit(5);
    
    if (error) {
      console.error('Error fetching pinned feedback from Supabase:', error);
      const localFeedbacks = getFeedbacksFromLocalStorage();
      return localFeedbacks.filter(f => f.pinned).slice(0, 5);
    }
    
    return data || [];
  } catch (error) {
    console.error('Supabase connection failed:', error);
    const localFeedbacks = getFeedbacksFromLocalStorage();
    return localFeedbacks.filter(f => f.pinned).slice(0, 5);
  }
};

export const addFeedback = async (feedback: Omit<Feedback, 'id' | 'created_at' | 'updated_at' | 'pinned'>): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('feedback')
      .insert([{ ...feedback, pinned: false }]);
    
    if (error) {
      console.error('Error adding feedback to Supabase:', error);
      return addFeedbackToLocalStorage(feedback);
    }
    
    return true;
  } catch (error) {
    console.error('Supabase connection failed:', error);
    return addFeedbackToLocalStorage(feedback);
  }
};

export const toggleFeedbackPin = async (id: number): Promise<boolean> => {
  try {
    // First get current pinned status
    const { data: currentFeedback } = await supabase
      .from('feedback')
      .select('pinned')
      .eq('id', id)
      .single();
    
    if (!currentFeedback) {
      return toggleFeedbackPinLocalStorage(id);
    }
    
    const { error } = await supabase
      .from('feedback')
      .update({ pinned: !currentFeedback.pinned })
      .eq('id', id);
    
    if (error) {
      console.error('Error toggling feedback pin in Supabase:', error);
      return toggleFeedbackPinLocalStorage(id);
    }
    
    return true;
  } catch (error) {
    console.error('Supabase connection failed:', error);
    return toggleFeedbackPinLocalStorage(id);
  }
};

export const deleteFeedback = async (id: number): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('feedback')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Error deleting feedback from Supabase:', error);
      return deleteFeedbackFromLocalStorage(id);
    }
    
    return true;
  } catch (error) {
    console.error('Supabase connection failed:', error);
    return deleteFeedbackFromLocalStorage(id);
  }
};

// Fallback localStorage functions
const getFeedbacksFromLocalStorage = (): Feedback[] => {
  if (typeof window === 'undefined') return defaultFeedbacks;
  
  const stored = localStorage.getItem('coastal_feedbacks');
  return stored ? JSON.parse(stored) : defaultFeedbacks;
};

const addFeedbackToLocalStorage = (feedback: Omit<Feedback, 'id' | 'created_at' | 'updated_at' | 'pinned'>): boolean => {
  try {
    const feedbacks = getFeedbacksFromLocalStorage();
    const newFeedback: Feedback = {
      ...feedback,
      id: feedbacks.length > 0 ? Math.max(...feedbacks.map(f => f.id)) + 1 : 1,
      pinned: false
    };
    const updatedFeedbacks = [newFeedback, ...feedbacks];
    localStorage.setItem('coastal_feedbacks', JSON.stringify(updatedFeedbacks));
    return true;
  } catch (error) {
    console.error('Error saving feedback to localStorage:', error);
    return false;
  }
};

const toggleFeedbackPinLocalStorage = (id: number): boolean => {
  try {
    const feedbacks = getFeedbacksFromLocalStorage();
    const updatedFeedbacks = feedbacks.map(feedback => 
      feedback.id === id ? { ...feedback, pinned: !feedback.pinned } : feedback
    );
    localStorage.setItem('coastal_feedbacks', JSON.stringify(updatedFeedbacks));
    return true;
  } catch (error) {
    console.error('Error toggling feedback pin in localStorage:', error);
    return false;
  }
};

const deleteFeedbackFromLocalStorage = (id: number): boolean => {
  try {
    const feedbacks = getFeedbacksFromLocalStorage();
    const updatedFeedbacks = feedbacks.filter(feedback => feedback.id !== id);
    localStorage.setItem('coastal_feedbacks', JSON.stringify(updatedFeedbacks));
    return true;
  } catch (error) {
    console.error('Error deleting feedback from localStorage:', error);
    return false;
  }
};