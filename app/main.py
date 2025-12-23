from fastapi import FastAPI
from app.api.routes import router

app = FastAPI(title="Constraint-First Wellness Agent")

app.include_router(router)

@app.get("/")
def health_check():
    return {
        "status": "Backend is running",
        "message": "Constraint-First Agent alive"
    }
