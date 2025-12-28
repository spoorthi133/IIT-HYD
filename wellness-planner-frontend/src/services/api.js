const API_BASE = 'http://localhost:8000';

export const apiService = {
  generatePlan: async (data) => {
    const response = await fetch(`${API_BASE}/plan`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to generate plan');
    }
    return response.json();
  },
  
  simulate: async (data) => {
    const response = await fetch(`${API_BASE}/simulate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to simulate plan');
    }
    return response.json();
  },
  
  generateWeekly: async (data) => {
    const response = await fetch(`${API_BASE}/simulate/week`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to generate weekly plan');
    }
    return response.json();
  },
};