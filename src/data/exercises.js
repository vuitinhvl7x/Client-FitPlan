export const exercises = [
  {
    id: 1,
    name: 'Push-ups',
    category: 'strength',
    difficulty: 'beginner',
    equipment: 'none',
    description: 'A classic bodyweight exercise that targets chest, shoulders, and triceps.',
    sets: 3,
    reps: '10-12'
  },
  {
    id: 2,
    name: 'Squats',
    category: 'strength',
    difficulty: 'beginner',
    equipment: 'none',
    description: 'A fundamental lower body exercise targeting quads, hamstrings, and glutes.',
    sets: 3,
    reps: '12-15'
  },
  // Add more exercises as needed
]

export const generateWorkoutPlan = (userData) => {
  // Simple logic to filter exercises based on user preferences
  const filteredExercises = exercises.filter(exercise => 
    exercise.difficulty === userData.fitnessLevel
  )
  
  return {
    exercises: filteredExercises,
    frequency: userData.workoutFrequency,
    duration: '45 minutes'
  }
}
