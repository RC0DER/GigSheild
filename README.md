🚀 GigShield AI

Smart income protection for gig delivery workers.

📌 Overview

Gig delivery workers (Blinkit, Zomato, Swiggy, etc.) depend on daily earnings. However, their income is highly volatile. On days with heavy rain, extreme heat, high pollution, or city-wide restrictions, they remain online and ready to work—but receive significantly fewer orders.

GigShield AI solves this problem by automatically detecting these external disruptions and compensating workers for their income loss instantly and fairly.

💡 The Core Idea

"If external conditions reduce earnings despite the worker being active, the system automatically triggers a compensation payout."

⚙️ How It Works

Registration: User registers with basic gig details and platform ID.

Risk Assessment: The system calculates a risk-based premium based on historical weather/AQI data for their region.

Policy Activation: User purchases a flexible weekly or daily policy.

Continuous Monitoring: System monitors real-time Weather and AQI APIs.

Disruption Detection: If a threshold (e.g., Rainfall > 50mm) is met, the system triggers the validation engine.

Activity Check: System verifies the worker was online during the disruption period.

Instant Payout: If the claim is genuine, the payout is processed immediately via the integrated payment gateway.

🧠 Core Logic

IF (bad_weather OR high_AQI OR extreme_heat)
AND (worker_is_active == True)
AND (orders_dropped_significantly == True)
THEN:
    approve_claim()
    initiate_instant_payout()


🔍 Key Features

Real-time Disruption Detection: Integrated with global weather and environmental sensors.

Activity-Based Validation: Uses GPS/status pings to prevent misuse and ensure only active workers are compensated.

Dynamic Premium Calculation: Risk-engine adjusts prices based on seasonal trends.

Automated Claims: No paperwork. No manual approvals. Everything is code-driven.

Fraud Detection: Rule-based (and ML-ready) engine to detect anomalous activity or location spoofing.

🏗️ System Architecture

Frontend (React)
        ↓
Backend API (Node.js / FastAPI)
        ↓
-------------------------------------------------------
Risk Engine | Trigger Engine | Validator | Fraud Engine
-------------------------------------------------------
        ↓
Database (MongoDB) ←→ External APIs (Weather, AQI)
        ↓
Payment Service (Razorpay / Mock)


🛠️ Tech Stack

Frontend: React.js, Tailwind CSS

Backend: Node.js (Express) / FastAPI

Database: MongoDB

APIs: OpenWeatherMap API, IQAir API

Payments: Razorpay (Integration ready)

Deployment: Vercel (Frontend), Render/Railway (Backend)

🧪 Example Scenario

Event: Rainfall recorded at 60 mm.

Worker Status: Online for 5 hours.

Platform Data: Orders dropped by 60% compared to average.

Result: ✅ Claim Approved

Payout: ₹400 sent instantly to worker's wallet.

🚀 Getting Started

Prerequisites

Node.js (v16+)

MongoDB Atlas account

API Keys for OpenWeatherMap

Installation

Clone the repository

git clone [https://github.com/your-username/GigShield-AI.git](https://github.com/your-username/GigShield-AI.git)
cd GigShield-AI


Backend Setup

cd backend
npm install
# Create a .env file and add your MONGO_URI, WEATHER_API_KEY, etc.
npm start


Frontend Setup

cd ../frontend
npm install
npm start


📂 Project Structure

GigShield-AI/
├── frontend/          # React application (UI/Dashboard)
├── backend/           # API server (Risk & Trigger engines)
│   ├── routes/        # API Endpoints
│   ├── controllers/   # Business logic
│   ├── models/        # MongoDB Schemas
│   └── services/      # External API integrations
├── cron/              # Background jobs for weather monitoring
├── docs/              # System design & API documentation
├── .env               # Environment variables
└── README.md


🔮 Future Roadmap

Deep Integration: Direct API partnership with Zomato/Swiggy for 100% accurate activity logs.

ML Fraud Detection: Using isolation forests to detect sophisticated spoofing patterns.

Worker Dashboard: Financial health tools to help gig workers manage their premiums and savings.

Community Insurance: Peer-to-peer risk pooling for specific delivery hubs.

🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

🏁 Final Thought

GigShield AI ensures that gig workers don’t lose their livelihood due to factors beyond their control. We are building a safety net for the backbone of the modern urban economy.
