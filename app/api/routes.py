from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class Constraints(BaseModel):
    time_minutes: int
    energy: str
    mental_load: str
    space: str
    exam_week: bool


@router.post("/plan")
def generate_plan(constraints: Constraints):
    return {
        "received_constraints": constraints,
        "message": "Step 1 working. No intelligence yet."
    }
