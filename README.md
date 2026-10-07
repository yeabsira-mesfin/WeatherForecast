# AgentBench SWE

AgentBench SWE is a portfolio-grade benchmark dashboard and scoring API for evaluating AI software engineering agents on realistic engineering work.

## Why this project exists

Many AI coding demos only check whether generated code compiles. AgentBench SWE treats engineering quality as a multi-dimensional problem. A solution is scored on correctness, security, tests, maintainability, and documentation.

## Features

- React + TypeScript benchmark dashboard
- FastAPI evaluation service
- Weighted 0-100 rubric scoring
- Tasks covering security, frontend, backend, SQL, API design, and DevOps
- Visible and hidden-test metadata
- Model comparison dashboard
- Backend unit tests with pytest
- GitHub Actions CI
- No arbitrary remote-code execution in the public demo

## Architecture

```text
React / TypeScript UI
        |
        v
FastAPI scoring API
        |
        v
Weighted evaluation engine
        |
        +--> correctness
        +--> security
        +--> test quality
        +--> maintainability
        +--> documentation
```

## Local setup

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Backend:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Tests:

```bash
cd backend
pytest
```

## Deployment

Deploy the frontend on Vercel by selecting `frontend` as the project root. The FastAPI service can run on a Python-capable host. The public dashboard intentionally avoids arbitrary remote-code execution.

## Portfolio signal

This project demonstrates AI evaluation design, benchmark construction, secure software engineering, Python API development, React/TypeScript frontend engineering, rubric design, testing, and CI/CD.

## Author

Yeabsira Mesfin
