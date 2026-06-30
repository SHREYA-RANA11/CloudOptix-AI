import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error

def train_prediction_model():
    df = pd.read_csv("../dataset/cloud_billing.csv")
    
    X = df[["cpu_usage", "memory_usage", "storage_gb", "network_gb"]]
    y = df["cost"]
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    model = LinearRegression()
    model.fit(X_train, y_train)
    
    mae = mean_absolute_error(y_test, model.predict(X_test))
    print(f"Model MAE: ${mae:.2f}")
    
    return model

def predict_cost(cpu, memory, storage, network):
    model = train_prediction_model()
    input_data = np.array([[cpu, memory, storage, network]])
    prediction = model.predict(input_data)[0]
    
    return {
        "predicted_cost": round(float(prediction), 2),
        "message": f"Estimated next month cost: ${prediction:.2f}"
    }