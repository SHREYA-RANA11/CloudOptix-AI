# CloudOptix AI 🚀

### AI-Powered Cloud Cost Optimization Platform

CloudOptix AI is a full-stack AI-powered platform designed to help organizations monitor cloud spending, detect anomalies, predict future costs, and optimize resource utilization using machine learning.

## Problem Statement

Cloud infrastructure costs can grow rapidly due to:

* Over-provisioned resources
* Idle virtual machines
* Unexpected usage spikes
* Lack of real-time monitoring

Manual monitoring makes it difficult to identify waste and optimize costs efficiently.

## Solution

CloudOptix AI provides:
✅ Real-time cloud cost monitoring
✅ AI-powered anomaly detection
✅ Cost prediction using machine learning
✅ Resource optimization recommendations
✅ Interactive analytics dashboard

---

## Features

* Dark mode analytics dashboard
* Daily cloud spend visualization with anomaly detection
* AI recommendation engine for resource optimization
* Live resource analyzer
* Cost prediction system
* Alert system for unusual resource behavior

---

## Architecture

Frontend → Backend API → AI Engine

**Flow:**
React App → Node.js API → FastAPI AI Engine → ML Models → Response to Dashboard

### Architecture Components

* **Frontend:** User interface and visualization dashboard
* **Backend:** API communication layer
* **AI Engine:** ML inference and prediction
* **Database/Dataset:** Synthetic cloud usage dataset

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Recharts

### Backend

* Node.js
* Express.js

### AI / Machine Learning

* Python
* FastAPI
* Scikit-learn
* Pandas
* NumPy

---

## AI Models Used

### 1. Isolation Forest

Used for anomaly detection in cloud resource usage.

Detects:

* Cost spikes
* Unusual CPU utilization
* Resource anomalies

### 2. Linear Regression

Used for predicting future cloud spending based on resource usage trends.

---

## Dataset

* Synthetic dataset of **1000 cloud resource records**
* Includes:

  * CPU usage
  * Memory usage
  * Cloud cost
* Injected **30 anomalies** for testing anomaly detection

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/SHREYA-RANA11/CloudOptix-AI.git
cd CloudOptix-AI
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Runs on: `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install
node server.js
```

Runs on: `http://localhost:5000`

### AI Engine Setup

```bash
cd ai-engine
pip install -r requirements.txt
uvicorn main:app --reload
```

Runs on: `http://localhost:8000`

---

## API Endpoint

### Analyze Resource Usage

**POST** `/api/analyze`

Request:

```json
{
  "cpu": 85,
  "memory": 78,
  "cost": 430
}
```

Response:

```json
{
  "anomaly": true,
  "predicted_cost": 460.25,
  "recommendation": "Downscale underutilized resources"
}
```

---

## Results

* Successfully connected all 3 servers
* Real-time AI analysis working end-to-end
* Detected anomalies accurately
* Generated optimization recommendations instantly

---

## Future Scope

* AWS integration
* Azure/GCP support
* Auto-scaling recommendations
* LLM-powered cloud assistant
* Real cloud billing API integration

---

## Screenshots

<img width="1905" height="1073" alt="image" src="https://github.com/user-attachments/assets/de5f8f37-62ef-4bb6-9b07-2a571040b478" />
<img width="1896" height="1086" alt="image" src="https://github.com/user-attachments/assets/aa8c64e4-5026-4952-861e-848de88fd8aa" />
<img width="1917" height="1091" alt="image" src="https://github.com/user-attachments/assets/8fa20e56-a4eb-4f87-96e2-bff62165293d" />



---

## Contributors

**Shreya Rana**

---

## License

This project is created for hackathon submission purposes.
