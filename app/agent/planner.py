
def generate_plan(state):
    """
    Generates activities based on agent mode.
    Deterministic for now. AI comes later.
    """

    if state.mode == "maintenance":
        return [
            "5 minutes breathing",
            "Light stretching"
        ]

    if state.mode == "micro":
        return [
            "3 minutes mobility",
            "Short walk"
        ]

    return [
        "10 minutes bodyweight workout",
        "5 minutes stretching"
    ]
