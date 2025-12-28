import React from 'react';
import { Calendar } from 'lucide-react';

export const WeeklyPlanDisplay = ({ weeklyPlan }) => {
  if (!weeklyPlan) return null;

  return (
    <div className="weekly-display">
      <div className="week-grid">
        {weeklyPlan.weekly_plan.map((day, idx) => (
          <div key={idx} className="day-card">
            <div className="day-header">
              <Calendar size={16} />
              {day.day}
            </div>
            <div className={`day-mode mode-${day.mode}`}>{day.mode}</div>
            <ul className="day-activities">
              {day.activities.slice(0, 3).map((activity, actIdx) => (
                <li key={actIdx}>{activity}</li>
              ))}
              {day.activities.length > 3 && (
                <li className="more-activities">+{day.activities.length - 3} more</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};