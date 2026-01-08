import React from 'react';
import { Utensils, Flame } from 'lucide-react';
import { Card } from './ui/Card';
import { MealPlan } from '../types';
interface MealPlanDayProps {
  plan: MealPlan;
}
export function MealPlanDay({
  plan
}: MealPlanDayProps) {
  const totalCalories = plan.meals.reduce((acc, meal) => acc + meal.calories, 0);
  const totalProtein = plan.meals.reduce((acc, meal) => acc + meal.protein, 0);
  const totalCarbs = plan.meals.reduce((acc, meal) => acc + meal.carbs, 0);
  const totalFats = plan.meals.reduce((acc, meal) => acc + meal.fats, 0);
  return <div className="space-y-6">
      {/* Daily Summary */}
      <Card className="bg-primary-50 border-primary-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 flex items-center">
            <Utensils className="w-5 h-5 mr-2 text-primary-600" />
            {plan.day}'s Nutrition
          </h3>
          <div className="flex items-center text-primary-700 font-bold">
            <Flame className="w-4 h-4 mr-1" />
            {totalCalories} kcal
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <p className="text-xs text-gray-500 uppercase font-bold">Protein</p>
            <p className="text-lg font-bold text-gray-900">{totalProtein}g</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <p className="text-xs text-gray-500 uppercase font-bold">Carbs</p>
            <p className="text-lg font-bold text-gray-900">{totalCarbs}g</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <p className="text-xs text-gray-500 uppercase font-bold">Fats</p>
            <p className="text-lg font-bold text-gray-900">{totalFats}g</p>
          </div>
        </div>
      </Card>

      {/* Meals List */}
      <div className="space-y-4">
        {plan.meals.map((meal, idx) => <Card key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between hover:border-primary-200 transition-colors">
            <div>
              <span className="text-xs font-bold text-primary-600 uppercase tracking-wide bg-primary-50 px-2 py-1 rounded mb-2 inline-block">
                {meal.type}
              </span>
              <h4 className="text-base font-bold text-gray-900">{meal.name}</h4>
            </div>

            <div className="mt-3 sm:mt-0 flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex flex-col items-center">
                <span className="font-bold text-gray-900">{meal.calories}</span>
                <span className="text-xs">kcal</span>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div className="space-x-3">
                <span title="Protein">P: {meal.protein}g</span>
                <span title="Carbs">C: {meal.carbs}g</span>
                <span title="Fats">F: {meal.fats}g</span>
              </div>
            </div>
          </Card>)}
      </div>
    </div>;
}