# # class AgentState:
# #     def __init__(self, constraints, previous_state=None):
# #         self.current_constraints = constraints
# #         self.previous_constraints = (
# #             previous_state.current_constraints if previous_state else None
# #         )

# #         self.mode = "normal"
# #         self.activities = []
# #         self.life_changed = False

# #         # NEW: reasoning trace
# #         self.agent_trace = []
# #         self.constraint_diff = {}

# from typing import List, Dict, Optional
# from app.models.schemas import Constraints


# class AgentState:
#     def __init__(
#         self,
#         current_constraints: Constraints,
#         previous_constraints: Optional[Constraints] = None,
#         mode: Optional[str] = None,
#         activities: Optional[List[str]] = None,
#         agent_trace: Optional[List[str]] = None,
#         constraint_diff: Optional[Dict[str, str]] = None,
#     ):
#         self.current_constraints = current_constraints
#         self.previous_constraints = previous_constraints
#         self.mode = mode
#         self.activities = activities or []
#         self.agent_trace = agent_trace or []
#         self.constraint_diff = constraint_diff or {}

from typing import TypedDict, List, Dict, Optional
from app.models.schemas import Constraints


class AgentState(TypedDict):
    current_constraints: Constraints
    previous_constraints: Optional[Constraints]
    mode: Optional[str]
    activities: List[str]
    agent_trace: List[str]
    constraint_diff: Dict[str, str]
