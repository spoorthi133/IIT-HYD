from pydantic import BaseModel
from typing import List,Dict


class Constraints(BaseModel):
    time_minutes: int
    energy: str
    mental_load: str
    space: str
    exam_week: bool


class PlanResponse(BaseModel):
    mode: str
    activities: List[str]
    reason: str
    agent_trace: List[str]
    constraint_diff: Dict[str, str]

class SimulationResponse(BaseModel):
    simulated: bool
    mode: str
    activities: List[str]
    agent_trace: List[str]

class DailyPlan(BaseModel):
    day: str
    mode: str
    activities: List[str]


class WeeklyPlanResponse(BaseModel):
    weekly_plan: List[DailyPlan]

class Constraints(BaseModel):
    time_minutes: int
    energy: str
    mental_load: str
    space: str
    exam_week: bool
    intent: str  # "fat_loss" | "exercise" | "meditation"


