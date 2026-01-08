import React from 'react';
import { Calendar as CalendarIcon, Clock, Activity } from 'lucide-react';
import { Card } from './ui/Card';
import { Workout } from '../types';
interface WorkoutCalendarProps {
  workouts: Workout[];
}
export function WorkoutCalendar({
  workouts
}: WorkoutCalendarProps) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {days.map(day => {
      const workout = workouts.find(w => w.day === day);
      const isRestDay = !workout;
      return <Card key={day} className={`
              h-full transition-all duration-200
              ${isRestDay ? 'bg-gray-50 border-dashed' : 'hover:border-primary-300'}
            `}>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-gray-900">{day}</h4>
              {isRestDay ? <span className="text-xs font-medium text-gray-400 bg-gray-200 px-2 py-1 rounded">
                  Rest
                </span> : <Activity className="w-4 h-4 text-primary-500" />}
            </div>

            {workout ? <>
                <h5 className="text-sm font-semibold text-primary-700 mb-3">
                  {workout.title}
                </h5>
                <div className="space-y-3">
                  {workout.exercises.map((exercise, idx) => <div key={idx} className="text-sm border-l-2 border-gray-200 pl-3 py-1">
                      <p className="font-medium text-gray-900">
                        {exercise.name}
                      </p>
                      <div className="flex items-center text-xs text-gray-500 mt-1 space-x-3">
                        <span>{exercise.sets} sets</span>
                        <span>{exercise.reps} reps</span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {exercise.rest}
                        </span>
                      </div>
                    </div>)}
                </div>
              </> : <div className="h-24 flex items-center justify-center text-gray-400 text-sm italic">
                Rest and recover
              </div>}
          </Card>;
    })}
    </div>;
}