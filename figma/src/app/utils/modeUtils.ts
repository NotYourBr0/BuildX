import { EmotionalMode, TravelerData } from '../types';

/**
 * Pure function to detect emotional mode based on traveler data.
 * 
 * Logic:
 * - Pre-Trip: If trip hasn't started yet (daysUntilTrip > 0).
 * - During-Trip: If trip is active (daysUntilTrip <= 0 and within end date).
 * - Post-Trip: If trip has ended.
 * 
 * In a real app, we would also factor in engagement scores to fine-tune 
 * (e.g., high anxiety might extend "pre" mode visuals).
 */
export const detectMode = (data: TravelerData): EmotionalMode => {
  const { daysUntilTrip, tripEndDate } = data;
  const now = new Date();
  const end = new Date(tripEndDate);

  if (daysUntilTrip > 0) {
    return 'pre';
  }
  
  // If we are past the start date (days <= 0) but before end date
  if (daysUntilTrip <= 0 && now <= end) {
    return 'during';
  }

  // If we are past the end date
  return 'post';
};

export const getInitialData = (): TravelerData => {
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);
  const twoWeeks = new Date(today);
  twoWeeks.setDate(today.getDate() + 14);

  return {
    tripStartDate: nextWeek.toISOString(),
    tripEndDate: twoWeeks.toISOString(),
    daysUntilTrip: 7,
    chatActivity: 5,
    photoUploads: 0,
    appEngagement: 2
  };
};
