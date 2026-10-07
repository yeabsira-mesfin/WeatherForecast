from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from .evaluator import evaluate

app = FastAPI(title="AgentBench SWE API", version="1.0.0")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["GET","POST"], allow_headers=["*"])

class Scores(BaseModel):
    correctness: float = Field(ge=0, le=100)
    security: float = Field(ge=0, le=100)
    tests: float = Field(ge=0, le=100)
    maintainability: float = Field(ge=0, le=100)
    documentation: float = Field(ge=0, le=100)

@app.get("/health")
def health(): return {"status":"ok","service":"agentbench-swe"}

@app.post("/evaluate")
def score(scores: Scores): return evaluate(scores.model_dump())
