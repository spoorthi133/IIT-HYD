import os
from langchain_openai import ChatOpenAI

# Force key into process environment (Windows-safe)
os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY", "")


def get_llm():
    return ChatOpenAI(
        model="gpt-3.5-turbo",
        temperature=0.2
    )
