import { create } from 'zustand'

export const useStore = create((set) => ({
  user: null,
  hasCompletedSurvey: false,
  workoutPlan: null,
  
  setUser: (userData) => set({ 
    user: userData,
    hasCompletedSurvey: true 
  }),
  
  setWorkoutPlan: (plan) => set({ 
    workoutPlan: plan 
  }),
  
  reset: () => set({ 
    user: null,
    hasCompletedSurvey: false,
    workoutPlan: null
  })
}))
