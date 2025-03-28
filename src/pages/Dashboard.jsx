import React from "react";
import { useStore } from "../store";

function ExerciseCard({ exercise }) {
  return (
    <div className="card">
      <h3 className="font-semibold text-lg">{exercise.name}</h3>
      <p className="text-neutral-600 text-sm">{exercise.description}</p>
      <div className="mt-2 text-sm">
        <p>Sets: {exercise.sets}</p>
        <p>Reps: {exercise.reps}</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { user, workoutPlan } = useStore();

  return (
    <div className="container py-16">
      <h1 className="section-title">Welcome, {user.name}!</h1>
      <div className="card">
        <h2 className="section-title">Your Workout Plan</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workoutPlan.exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
    </div>
  );
}
