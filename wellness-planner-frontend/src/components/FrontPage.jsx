import React from 'react';
import { Sparkles, Clock, Activity } from 'lucide-react';
import '../styles/FrontPage.css';

export default function FrontPage({ onNavigate }) {
  const handleGoClick = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <div className="landing-container">
      {/* Animated Background Elements */}
      <div className="bg-animation">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-circle circle-4"></div>
      </div>

      {/* LEFT SECTION - Mode Cards */}
      <div className="left-section">
        <div className="mode-card" style={{ animationDelay: '0.1s' }}>
          <div className="mode-card-icon maintenance">
            <Sparkles size={24} />
          </div>
          <h3 className="mode-card-title">Maintenance Mode</h3>
          <p className="mode-card-description">
            Gentle, low-intensity plans that help maintain wellness during busy or stressful periods.
          </p>
        </div>

        <div className="mode-card" style={{ animationDelay: '0.2s' }}>
          <div className="mode-card-icon micro">
            <Clock size={24} />
          </div>
          <h3 className="mode-card-title">Micro Mode</h3>
          <p className="mode-card-description">
            Short, time-efficient activities designed for days with very limited availability.
          </p>
        </div>

        <div className="mode-card" style={{ animationDelay: '0.3s' }}>
          <div className="mode-card-icon normal">
            <Activity size={24} />
          </div>
          <h3 className="mode-card-title">Normal Mode</h3>
          <p className="mode-card-description">
            Balanced wellness plans that promote fitness and consistency when constraints allow.
          </p>
        </div>
      </div>

      {/* RIGHT SECTION - Branding & CTA */}
      <div className="right-section">
        <div className="branding-content">
          <h1 className="brand-title">Wellness Planner</h1>
          <h2 className="brand-tagline">
            Design health around life, not life around health!!
          </h2>
          <button className="cta-button" onClick={handleGoClick}>
            Go
            <span className="button-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}