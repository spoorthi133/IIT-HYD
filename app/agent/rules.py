def apply_rules(state: dict):
    c = state["current_constraints"]
    p = state["previous_constraints"]

    updates = {}
    agent_trace = state["agent_trace"]

    # -------------------------
    # Constraint diff
    # -------------------------
    if p:
        diff = {}
        for field in c.__dict__:
            old = getattr(p, field)
            new = getattr(c, field)
            if old != new:
                diff[field] = f"{old} → {new}"
        if diff:
            updates["constraint_diff"] = diff
            agent_trace.append("Constraints changed")

    # -------------------------
    # Rule-based mode selection
    # -------------------------
    if c.exam_week:
        updates["mode"] = "maintenance"
        agent_trace.append("Exam week detected → maintenance mode")

    if c.mental_load == "high":
        updates["mode"] = "maintenance"
        agent_trace.append("Mental load high → avoid complex tasks")

    if c.time_minutes < 15:
        updates["mode"] = "micro"
        agent_trace.append("Time < 15 minutes → micro plan")

    if c.energy == "low":
        updates["mode"] = "maintenance"
        agent_trace.append("Low energy → recovery-focused plan")

    # Default fallback
    if "mode" not in updates:
        updates["mode"] = "normal"
        agent_trace.append("Default → normal mode")

    # -------------------------
    # Intent-based activity selection
    # -------------------------
    from app.agent.activity_library import ACTIVITY_LIBRARY

    intent = c.intent
    energy = c.energy

    agent_trace.append(f"Intent detected: {intent}")

    available_activities = ACTIVITY_LIBRARY.get(intent, {}).get(
        energy, ["Gentle stretching"]
    )

    # 🔥 Time-aware exercise volume
    if c.time_minutes >= 40:
        count = 4
    elif c.time_minutes >= 25:
        count = 3
    else:
        count = 1

    # 🔁 Rotation memory
    history = state.get("activity_history", [])

    rotated = [a for a in available_activities if a not in history]

    if rotated:
        selected = rotated[:count]
        agent_trace.append("Activity rotation applied")
    else:
        selected = available_activities[:count]
        agent_trace.append("Rotation exhausted → fallback activities")

    updates["activities"] = selected
    updates["activity_history"] = selected
    updates["agent_trace"] = agent_trace

    return updates
