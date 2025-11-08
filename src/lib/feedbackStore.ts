export interface Feedback {
  id: number;
  name: string;
  email?: string;
  rating: number;
  feedback: string;
  date: string;
  pinned: boolean;
}

const FEEDBACKS_STORAGE_KEY = 'coastal_feedbacks';

const defaultFeedbacks: Feedback[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    feedback: "Outstanding work on my restaurant website! Professional, responsive, and incredibly talented.",
    date: "2024-01-15",
    pinned: true
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    feedback: "Excellent service and great communication throughout the project. Highly recommend!",
    date: "2024-01-10",
    pinned: true
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 4,
    feedback: "Good quality work and delivered on time. Very satisfied with the results.",
    date: "2024-01-08",
    pinned: true
  },
  {
    id: 4,
    name: "John Smith",
    rating: 5,
    feedback: "Amazing experience! The team understood my requirements perfectly.",
    date: "2024-01-05",
    pinned: false
  }
];

export const getFeedbacks = (): Feedback[] => {
  if (typeof window === 'undefined') return defaultFeedbacks;
  
  const stored = localStorage.getItem(FEEDBACKS_STORAGE_KEY);
  return stored ? JSON.parse(stored) : defaultFeedbacks;
};

export const getPinnedFeedbacks = (): Feedback[] => {
  const feedbacks = getFeedbacks();
  return feedbacks.filter(f => f.pinned).slice(0, 5);
};

export const addFeedback = (feedback: Omit<Feedback, 'id' | 'date' | 'pinned'>): void => {
  const feedbacks = getFeedbacks();
  const newFeedback: Feedback = {
    ...feedback,
    id: feedbacks.length > 0 ? Math.max(...feedbacks.map(f => f.id)) + 1 : 1,
    date: new Date().toISOString().split('T')[0],
    pinned: false
  };
  const updatedFeedbacks = [newFeedback, ...feedbacks];
  localStorage.setItem(FEEDBACKS_STORAGE_KEY, JSON.stringify(updatedFeedbacks));
};

export const toggleFeedbackPin = (id: number): void => {
  const feedbacks = getFeedbacks();
  const updatedFeedbacks = feedbacks.map(feedback => 
    feedback.id === id ? { ...feedback, pinned: !feedback.pinned } : feedback
  );
  localStorage.setItem(FEEDBACKS_STORAGE_KEY, JSON.stringify(updatedFeedbacks));
};

export const deleteFeedback = (id: number): void => {
  const feedbacks = getFeedbacks();
  const updatedFeedbacks = feedbacks.filter(feedback => feedback.id !== id);
  localStorage.setItem(FEEDBACKS_STORAGE_KEY, JSON.stringify(updatedFeedbacks));
};