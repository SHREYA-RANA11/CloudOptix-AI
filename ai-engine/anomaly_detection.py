import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest
from sklearn.preprocessing import StandardScaler

def train_anomaly_model():
    df = pd.read_csv("../dataset/cloud_billing.csv")
    features = df[["cost", "cpu_usage", "memory_usage", "network_gb"]]

    scaler = StandardScaler()
    scaled = scaler.fit_transform(features)

    model = IsolationForest(contamination=0.03, random_state=42)
    model.fit(scaled)

    return model, scaler, df

def detect_anomaly(cpu, cost, memory, network):
    model, scaler, _ = train_anomaly_model()
    input_data = np.array([[cost, cpu, memory, network]])
    scaled_input = scaler.transform(input_data)
    prediction = model.predict(scaled_input)
    score = model.decision_function(scaled_input)[0]

    return {
        "anomaly": bool(prediction[0] == -1),
        "score": round(float(score), 4),
        "message": "Anomaly detected — unusual spending pattern" if prediction[0] == -1 else "Normal usage"
    }