import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const PlanDisplay = ({ plan, isSimulation = false }) => {
  const [showTrace, setShowTrace] = useState(false);

  if (!plan) return null;

  return (
    <div className="plan-display">
      {isSimulation && <div className="simulation-badge">Simulated Plan</div>}
      
      <div className={`mode-badge mode-${plan.mode}`}>
        <Sparkles size={16} />
        {plan.mode} mode
      </div>

      {plan.reason && (
        <div className="reason-box">
          <strong>Why this plan?</strong>
          <p>{plan.reason}</p>
        </div>
      )}

      <div className="activities-section">
        <h3>Your Activities</h3>
        <ul className="activities-list">
          {plan.activities.map((activity, idx) => (
            <li key={idx} className="activity-item">
              <span className="activity-number">{idx + 1}</span>
              {activity}
            </li>
          ))}
        </ul>
      </div>

      {plan.agent_trace && plan.agent_trace.length > 0 && (
        <div className="trace-section">
          <button className="trace-toggle" onClick={() => setShowTrace(!showTrace)}>
            Agent Reasoning
            {showTrace ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          
          {showTrace && (
            <div className="trace-content">
              {plan.agent_trace.map((step, idx) => (
                <div key={idx} className="trace-step">
                  <div className="trace-bullet" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};