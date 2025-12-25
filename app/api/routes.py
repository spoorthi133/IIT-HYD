

from fastapi import APIRouter
from app.models.schemas import (
    Constraints,
    PlanResponse,
    SimulationResponse,
    WeeklyPlanResponse,
    DailyPlan,
)
from app.agent.graph import create_agent_graph
import copy

router = APIRouter()
agent = create_agent_graph()

previous_constraints = None
previous_activities = []

def build_state_input(constraints, previous_constraints):
    return {
        "current_constraints": constraints,
        "previous_constraints": previous_constraints,
        "mode": "normal",          # NEVER None
        "activities": [],
        "agent_trace": [],
        "constraint_diff": {},
    }


@router.post("/plan", response_model=PlanResponse)
def generate_plan_endpoint(constraints: Constraints):
    global previous_constraints

    state_input = build_state_input(constraints, previous_constraints)
    final_state = agent.invoke(state_input)

    previous_constraints = constraints
    previous_activities = final_state["activities"]
    return PlanResponse(
        mode=final_state["mode"],
        activities=final_state["activities"],
        reason="Constraint-first plan generated",
        agent_trace=final_state["agent_trace"],
        constraint_diff=final_state.get("constraint_diff", {}),
    )


@router.post("/simulate", response_model=SimulationResponse)
def simulate_plan(constraints: Constraints):
    state_input = build_state_input(constraints, None)
    final_state = agent.invoke(state_input)

    return SimulationResponse(
        simulated=True,
        mode=final_state["mode"],
        activities=final_state["activities"],
        agent_trace=final_state["agent_trace"],
    )




@router.post("/simulate/week", response_model=WeeklyPlanResponse)
def simulate_week(constraints: Constraints):
    weekly_plan = []

    current_constraints = constraints
    previous_constraints = None
    activity_history = []

    for day in range(1, 8):
        state_input = {
            "current_constraints": current_constraints,
            "previous_constraints": previous_constraints,
            "mode": None,
            "activities": [],
            "agent_trace": [],
            "constraint_diff": {},
            "activity_history": activity_history
        }

        final_state = agent.invoke(state_input)

        weekly_plan.append(
            DailyPlan(
                day=f"Day {day}",
                mode=final_state["mode"],
                activities=final_state["activities"]
            )
        )

        # 🔁 carry history forward
        activity_history = final_state.get("activity_history", [])

        # 🔁 simulate fatigue
        if current_constraints.energy == "medium":
            current_constraints.energy = "low"

        # 🔁 simulate time variation
        if day % 3 == 0:
            current_constraints.time_minutes = max(
                10, current_constraints.time_minutes - 5
            )

        previous_constraints = current_constraints

    return WeeklyPlanResponse(weekly_plan=weekly_plan)



def build_state_input(constraints, previous_constraints, previous_activities=None):
    return {
        "current_constraints": constraints,
        "previous_constraints": previous_constraints,
        "mode": None,
        "activities": [],
        "agent_trace": [],
        "constraint_diff": {},
        "activity_history": previous_activities or [],
    }

