import os
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY = os.getenv("LLM_API_KEY")
