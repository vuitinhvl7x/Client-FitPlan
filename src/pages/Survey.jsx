import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store'
import { generateWorkoutPlan } from '../data/exercises'

export default function Survey() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { setUser, setWorkoutPlan } = useStore()

  const onSubmit = (data) => {
    setUser(data)
    const plan = generateWorkoutPlan(data)
    setWorkoutPlan(plan)
    navigate('/dashboard')
  }

  return (
    <div className="container py-16">
      <div className="max-w-md mx-auto card">
        <h1 className="section-title text-center">Welcome to FitPlan</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="form-label">Name</label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="input"
            />
            {errors.name && <p className="mt-1 text-sm text-secondary-500">{errors.name.message}</p>}
          </div>

          <div>
            <label className="form-label">Age</label>
            <input
              type="number"
              {...register('age', {
                required: 'Age is required',
                min: { value: 16, message: 'Must be at least 16 years old' },
              })}
              className="input"
            />
            {errors.age && <p className="mt-1 text-sm text-secondary-500">{errors.age.message}</p>}
          </div>

          <div>
            <label className="form-label">Fitness Level</label>
            <select {...register('fitnessLevel')} className="input">
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label className="form-label">Workout Frequency (days per week)</label>
            <select {...register('workoutFrequency')} className="input">
              <option value="2">2 days</option>
              <option value="3">3 days</option>
              <option value="4">4 days</option>
              <option value="5">5 days</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-full hover:scale-105">
            Create My Plan
          </button>
        </form>
      </div>
    </div>
  )
}
