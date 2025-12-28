# 🧠 Wellness Planner

A constraint-first, agentic wellness planning system that designs realistic
fitness and mental wellness routines based on user context and limitations.

> Design health around life, not life around health.

---

## ✨ Features

- Constraint-aware planning (time, energy, mental load, space, exam week)
- Deterministic agent logic (no LLM hallucinations)
- Transparent agent reasoning (traceable decisions)
- Three adaptive modes:
  - Maintenance Mode
  - Micro Mode
  - Normal Mode
- Weekly wellness planning
- Modern React frontend (LeetCode-inspired UI)

---

## 🏗️ Project Structure

wellness-planner/
├── backend/ # FastAPI + LangGraph
├── frontend/ # Vite + React

yaml
Copy code

---

## 🧪 Tech Stack

### Backend
- FastAPI
- LangGraph
- Python 3.10+

### Frontend
- React
- Vite
- CSS

---

## 🚀 How to Run the Project Locally

### 1️⃣ Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload