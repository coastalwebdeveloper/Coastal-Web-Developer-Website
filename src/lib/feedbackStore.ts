export interface Feedback {
  id: number;
  name: string;
  email?: string;
  rating: number;
  feedback: string;
  date: string;
  pinned: boolean;
}

let feedbackData: Feedback[] = [
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
  return [...feedbackData];
};

export const getPinnedFeedbacks = (): Feedback[] => {
  return feedbackData.filter(f => f.pinned).slice(0, 5);
};

export const addFeedback = (feedback: Omit<Feedback, 'id' | 'date' | 'pinned'>): void => {
  const newFeedback: Feedback = {
    ...feedback,
    id: Math.max(...feedbackData.map(f => f.id)) + 1,
    date: new Date().toISOString().split('T')[0],
    pinned: false
  };
  feedbackData.unshift(newFeedback);
};

export const toggleFeedbackPin = (id: number): void => {
  feedbackData = feedbackData.map(feedback => 
    feedback.id === id ? { ...feedback, pinned: !feedback.pinned } : feedback
  );
};

export const deleteFeedback = (id: number): void => {
  feedbackData = feedbackData.filter(feedback => feedback.id !== id);
};