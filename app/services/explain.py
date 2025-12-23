# from app.agent.llm import get_llm


# def explain_plan_with_llm(state):
#     llm = get_llm()

#     prompt = f"""
# You are a wellness planning assistant.

# User constraints:
# - Time: {state.current_constraints.time_minutes} minutes
# - Energy: {state.current_constraints.energy}
# - Mental load: {state.current_constraints.mental_load}
# - Exam week: {state.current_constraints.exam_week}

# Chosen mode: {state.mode}
# Activities: {state.activities}

# Explain briefly WHY this plan was chosen.
# Do NOT give medical advice.
# Keep it short and supportive.
# """

#     response = llm.invoke(prompt)
#     return response.content.strip()
def explain_plan_with_llm(state):
    return (
        f"Given your available time of {state.current_constraints.time_minutes} minutes "
        f"and current mental load ({state.current_constraints.mental_load}), "
        f"the agent selected a {state.mode} plan to ensure consistency "
        f"without adding stress."
    )
