import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { MembershipCard } from '../../components/MembershipCard';
import { WorkoutCalendar } from '../../components/WorkoutCalendar';
import { MealPlanDay } from '../../components/MealPlanDay';
import { mockWorkouts, mockMealPlan } from '../../utils/mockData';
import { Button } from '../../components/ui/Button';
import { ArrowRight } from 'lucide-react';
export function MemberDashboard() {
  return <DashboardLayout role="member">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Member Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Track your progress and stay on target.
            </p>
          </div>
          <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Update Fitness Profile
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Workout */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">
                  Your Schedule
                </h2>
                <a href="/member/workout-plan" className="text-sm font-medium text-primary-600 hover:text-primary-700">
                  View Full Calendar
                </a>
              </div>
              <WorkoutCalendar workouts={mockWorkouts.slice(0, 2)} />
            </div>

            {/* Today's Meal Plan */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">
                  Today's Nutrition
                </h2>
                <a href="/member/meal-plan" className="text-sm font-medium text-primary-600 hover:text-primary-700">
                  View Full Plan
                </a>
              </div>
              <MealPlanDay plan={mockMealPlan[0]} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <MembershipCard tier="Premium" expiryDate="2024-05-15" onRenew={() => console.log('Renew')} />

            {/* Quick Stats or Recommendations could go here */}
          </div>
        </div>
      </div>
    </DashboardLayout>;
}