# 🧠 Constraint-Based Wellness Agent – Backend System

A b intelligent wellness planning system that **designs health routines around real-life constraints**, not ideal goals.

Instead of asking *“What is your fitness goal?”*, this agent first asks:
**“What is actually possible right now?”**

The system adapts plans dynamically based on **time, energy, mental load, space, exams, and user intent**.

---

## 🎯 Core Idea

Most wellness apps assume:
- unlimited motivation
- plenty of time
- high energy

This agent does the opposite.

It is **constraint-first**, meaning:
- life comes first
- wellness fits *inside* life

---

## 🚀 Features

### 🔧 Constraint-Based Planning
Plans are generated using:
- Available time (micro / normal / extended)
- Energy level
- Mental load
- Exam week detection
- Available space
- User intent (fat loss, exercise, recovery, relaxation)

---

### 🔁 Activity Rotation Memory
- Avoids repeating the same activities daily
- Feels more intelligent and human
- Tracks previously suggested exercises
- Rotates activities automatically

---

### 🗓 Weekly Planner Intelligence
- Generates adaptive weekly plans
- Fatigue simulation over days
- Time pressure variation
- Adjusts activity volume automatically
- Supports realistic academic schedules

---

### 🔍 Constraint Change Diff
- Detects what changed from last request
- Explains why the plan changed
- Improves transparency and trust

---

### 🧠 Explainable Agent Reasoning
- Agent traces every decision
- Shows exactly *why* a plan was chosen
- Easy to demo and judge-friendly

---


## 🛠 Tech Stack

### Backend
- FastAPI
- LangGraph (agent orchestration)
- Pydantic
- Rule-based reasoning engine


### Frontend
- Vite React
- 
### Optional AI Layer
- LLM-ready architecture
- Can be toggled ON/OFF
- Safe for demos without API dependency

---


---

## ▶️ How to Run

### 1️⃣ Setup Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
Server runs at:

http://localhost:8000


API docs:

http://localhost:8000/docs



### Setup Frontend
```bash
cd frontend
npm install
npm run dev
```


