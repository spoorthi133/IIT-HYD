from typing import TypedDict, List, Dict, Optional
from app.models.schemas import Constraints


class AgentState(TypedDict):
    current_constraints: Constraints
    previous_constraints: Optional[Constraints]
    mode: Optional[str]
    activities: List[str]
    agent_trace: List[str]
    constraint_diff: Dict[str, str]
    activity_history: List[str]