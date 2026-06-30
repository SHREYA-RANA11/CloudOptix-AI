from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from anomaly_detection import detect_anomaly
from cost_prediction import predict_cost

app = FastAPI(title="CloudOptix AI Engine")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ResourceInput(BaseModel):
    cpu: float
    memory: float
    cost: float
    network: float = 10.0
    storage: float = 200.0

@app.get("/")
def root():
    return {"message": "CloudOptix AI Engine running"}

@app.post("/detect-anomaly")
def anomaly_endpoint(data: ResourceInput):
    result = detect_anomaly(data.cpu, data.cost, data.memory, data.network)
    return result

@app.post("/predict-cost")
def prediction_endpoint(data: ResourceInput):
    result = predict_cost(data.cpu, data.memory, data.storage, data.network)
    return result

@app.post("/analyze")
def analyze_endpoint(data: ResourceInput):
    anomaly = detect_anomaly(data.cpu, data.cost, data.memory, data.network)
    prediction = predict_cost(data.cpu, data.memory, data.storage, data.network)

    recommendation = None
    if data.cpu < 20 and data.memory < 30:
        recommendation = "Downsize VM — CPU and memory heavily underutilized"
    elif data.cpu < 20:
        recommendation = "Consider smaller instance — low CPU usage detected"
    elif data.cost > 500:
        recommendation = "High cost detected — review resource allocation"
    else:
        recommendation = "Resource usage looks optimal"

    return {
        "anomaly": anomaly,
        "prediction": prediction,
        "recommendation": recommendation
    }