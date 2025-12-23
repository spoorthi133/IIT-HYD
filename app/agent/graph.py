from langgraph.graph import StateGraph
from app.agent.rules import apply_rules
from app.agent.state import AgentState


def create_agent_graph():
    graph = StateGraph(AgentState)

    # IMPORTANT: explicitly define entry point
    graph.add_node("rules", apply_rules)

    graph.set_entry_point("rules")
    graph.set_finish_point("rules")

    return graph.compile()

# def plan_node(state):
#     # Planner decides ONLY mode, not activities
#     return state

