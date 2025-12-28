import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { apiService } from './services/api';
import { PlannerForm } from './components/PlannerForm';
import { PlanDisplay } from './components/PlanDisplay';
import { WeeklyPlanDisplay } from './components/WeeklyPlanDisplay';
import FrontPage from './components/FrontPage';

export default function App() {
  const [showPlanner, setShowPlanner] = useState(false);
  const [activeTab, setActiveTab] = useState('planner');
  const [plan, setPlan] = useState(null);
  const [weeklyPlan, setWeeklyPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGeneratePlan = async (formData) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await apiService.generatePlan(formData);
      setPlan(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSimulate = async (formData) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await apiService.simulate(formData);
      setPlan(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWeekly = async (formData) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await apiService.generateWeekly(formData);
      setWeeklyPlan(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Show front page if not navigated yet
  if (!showPlanner) {
    return <FrontPage onNavigate={() => setShowPlanner(true)} />;
  }

  return (
    <div className="app">
      <header className="header">
        <h1>
          <Heart size={28} />
          Wellness Planner
        </h1>
        <p>Constraint-aware wellness planning powered by agentic reasoning</p>
      </header>

      <nav className="tabs">
        <button
          className={`tab ${activeTab === 'planner' ? 'active' : ''}`}
          onClick={() => { setActiveTab('planner'); setPlan(null); setWeeklyPlan(null); }}
        >
          Daily Planner
        </button>
        <button
          className={`tab ${activeTab === 'simulate' ? 'active' : ''}`}
          onClick={() => { setActiveTab('simulate'); setPlan(null); setWeeklyPlan(null); }}
        >
          What-If Simulation
        </button>
        <button
          className={`tab ${activeTab === 'weekly' ? 'active' : ''}`}
          onClick={() => { setActiveTab('weekly'); setPlan(null); setWeeklyPlan(null); }}
        >
          Weekly Planner
        </button>
      </nav>

      <main className="main">
        {error && <div className="error-box">{error}</div>}

        <div className="content-grid">
          <div className="form-column">
            {activeTab === 'planner' && (
              <PlannerForm onSubmit={handleGeneratePlan} submitLabel="Generate Plan" isLoading={isLoading} />
            )}
            {activeTab === 'simulate' && (
              <PlannerForm onSubmit={handleSimulate} submitLabel="Simulate Plan" isLoading={isLoading} />
            )}
            {activeTab === 'weekly' && (
              <PlannerForm onSubmit={handleWeekly} submitLabel="Generate Weekly Plan" isLoading={isLoading} />
            )}
          </div>

          <div className="result-column">
            {activeTab !== 'weekly' && plan && (
              <PlanDisplay plan={plan} isSimulation={activeTab === 'simulate'} />
            )}
            {activeTab === 'weekly' && weeklyPlan && (
              <WeeklyPlanDisplay weeklyPlan={weeklyPlan} />
            )}
          </div>
        </div>
      </main>

      {/* Back button */}
      <button 
        className="back-to-home"
        onClick={() => setShowPlanner(false)}
      >
        ← Back to Home
      </button>
    </div>
  );
}