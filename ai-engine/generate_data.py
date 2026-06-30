import pandas as pd
import numpy as np

np.random.seed(42)
n = 1000
dates = pd.date_range("2025-01-01", periods=n, freq="D")

df = pd.DataFrame({
    "date": dates.astype(str),
    "service": np.random.choice(["EC2", "S3", "RDS", "Lambda"], n),
    "cost": np.random.normal(100, 15, n).round(2),
    "cpu_usage": np.random.normal(50, 20, n).clip(0, 100).round(2),
    "memory_usage": np.random.normal(60, 15, n).clip(0, 100).round(2),
    "storage_gb": np.random.normal(200, 50, n).clip(0).round(2),
    "network_gb": np.random.normal(10, 3, n).clip(0).round(2),
})

anomaly_idx = np.random.choice(n, 30, replace=False)
df.loc[anomaly_idx, "cost"] *= np.random.uniform(5, 9, 30)
df.loc[anomaly_idx, "cpu_usage"] = np.random.uniform(95, 100, 30)

df.to_csv("../dataset/cloud_billing.csv", index=False)
print(f"Dataset created: {len(df)} rows, {len(anomaly_idx)} anomalies injected")