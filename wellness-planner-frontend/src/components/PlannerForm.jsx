import React, { useState } from 'react';
import { Dumbbell, Brain, Heart, Maximize2 } from 'lucide-react';

export const PlannerForm = ({ onSubmit, submitLabel, isLoading }) => {
  const [formData, setFormData] = useState({
    time_minutes: 30,
    energy: 'medium',
    mental_load: 'medium',
    space: 'medium',
    intent: 'exercise',
    exam_week: false,
  });

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="planner-form">
      <div className="form-group">
        <label>Time Available (minutes)</label>
        <input
          type="range"
          min="5"
          max="120"
          value={formData.time_minutes}
          onChange={(e) => setFormData({ ...formData, time_minutes: parseInt(e.target.value) })}
          className="slider"
        />
        <span className="slider-value">{formData.time_minutes} min</span>
      </div>

      <div className="form-group">
        <label>Energy Level</label>
        <div className="radio-group">
          {['low', 'medium', 'high'].map((level) => (
            <label key={level} className="radio-label">
              <input
                type="radio"
                value={level}
                checked={formData.energy === level}
                onChange={(e) => setFormData({ ...formData, energy: e.target.value })}
              />
              <span className={`radio-custom ${level}`}>{level}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Mental Load</label>
        <div className="radio-group">
          {['low', 'medium', 'high'].map((level) => (
            <label key={level} className="radio-label">
              <input
                type="radio"
                value={level}
                checked={formData.mental_load === level}
                onChange={(e) => setFormData({ ...formData, mental_load: e.target.value })}
              />
              <span className={`radio-custom ${level}`}>{level}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Available Space</label>
        <div className="radio-group">
          {['small', 'medium', 'large'].map((size) => (
            <label key={size} className="radio-label">
              <input
                type="radio"
                value={size}
                checked={formData.space === size}
                onChange={(e) => setFormData({ ...formData, space: e.target.value })}
              />
              <span className={`radio-custom space-${size}`}>{size}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Intent</label>
        <div className="intent-group">
          {[
            { value: 'fat_loss', label: 'Fat Loss', icon: <Dumbbell size={20} /> },
            { value: 'exercise', label: 'Exercise', icon: <Heart size={20} /> },
            { value: 'meditation', label: 'Meditation', icon: <Brain size={20} /> },
          ].map((intent) => (
            <button
              key={intent.value}
              type="button"
              className={`intent-btn ${formData.intent === intent.value ? 'active' : ''}`}
              onClick={() => setFormData({ ...formData, intent: intent.value })}
            >
              {intent.icon}
              {intent.label}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={formData.exam_week}
            onChange={(e) => setFormData({ ...formData, exam_week: e.target.checked })}
          />
          <span>Exam Week Mode</span>
        </label>
      </div>

      <button type="button" onClick={handleSubmit} className="submit-btn" disabled={isLoading}>
        {isLoading ? 'Loading...' : submitLabel}
      </button>
    </div>
  );
};