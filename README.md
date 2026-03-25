# FinSage — AI-Powered Personal Finance Advisor

> Free, AI-powered personal finance tools for every Indian.
> No advisor fees. No signup. No data stored.

🌐 **Live Demo:** [https://finsage-eight.vercel.app](https://finsage-eight.vercel.app)

---

## Features

| # | Feature | What it does |
|---|---------|-------------|
| 1 | 💊 Money Health Score | 360° financial health check across 6 dimensions — radar chart + score gauge |
| 2 | 🔥 FIRE Path Planner | Corpus calculator + monthly SIP target + year-by-year growth projection chart |
| 3 | 🧾 Smart Tax Wizard | Upload Form 16 or enter manually → old vs new regime comparison + missed deductions |
| 4 | 📊 MF Portfolio X-Ray | XIRR returns + fund overlap matrix + expense ratio drag analysis |
| 5 | 🎯 Life Event Advisor | 30/60/90-day action plans for marriage, baby, job change, bonus, retirement |
| 6 | 💑 Couple's Money Planner | HRA optimization + NPS strategy + joint SIP split |
| 7 | 💬 Ask FinSage AI | Free AI chat for any personal finance question — replaces ₹25K/yr advisors |
| 8 | 🧮 Financial Calculators | SIP, Lumpsum, EMI, Goal Planner — interactive sliders, instant results |
| 9 | 📖 Finance Glossary | 30+ terms explained in plain English — FIRE, XIRR, SIP, ELSS, NPS and more |

---

## Live URLs

| Service | URL |
|---------|-----|
| 🌐 Frontend | [https://finsage-eight.vercel.app](https://finsage-eight.vercel.app) |
| ⚙️ Backend API | [https://finsage-eg0s.onrender.com](https://finsage-eg0s.onrender.com) |
| ❤️ Health Check | [https://finsage-eg0s.onrender.com/api/v1/health](https://finsage-eg0s.onrender.com/api/v1/health) |

> **Note:** Backend runs on Render free tier — first request may take ~30 seconds to wake up. Visit the health check URL before demoing.

---

## Quick Start (Local)

### Prerequisites
- Python 3.11+
- Node.js 18+
- [Groq API key](https://console.groq.com) (free tier)

### 1. Backend

```bash
# Clone and setup
git clone https://github.com/prerna001501/finsage.git
cd finsage

# Create .env file
echo GROQ_API_KEY=your_key_here > .env

# Install and run
pip install -r backend/requirements.txt
python -m uvicorn backend.main:app --reload --port 8000
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

Open: **http://localhost:3000**

---

## Project Structure

```
finsage/
├── backend/
│   ├── main.py               # FastAPI app, CORS, all routers
│   ├── config.py             # Pydantic settings (GROQ_API_KEY)
│   ├── llm_client.py         # Groq SDK wrapper (chat + chat_structured)
│   ├── routers/              # 7 API routers (6 features + AI chat)
│   ├── services/             # Tax calculator, XIRR, SIP projector, PDF parser
│   ├── prompts/              # LLM system prompts + JSON schemas
│   └── sample_data/          # Mock portfolio + Form 16 JSON
└── frontend/
    └── src/
        ├── pages/            # 11 React pages
        ├── components/       # RadarChart, SipGrowthChart, ScoreGauge, FileUpload…
        └── api/client.ts     # Axios API client
```

---

## API Endpoints

| Method | Path | Feature |
|--------|------|---------|
| GET | `/api/v1/health` | Health check |
| POST | `/api/v1/health-score/calculate` | Money Health Score |
| POST | `/api/v1/fire-planner/generate` | FIRE Planner |
| POST | `/api/v1/tax-wizard/analyze` | Tax Wizard |
| POST | `/api/v1/portfolio-xray/analyze` | Portfolio X-Ray |
| POST | `/api/v1/life-events/advise` | Life Events Advisor |
| POST | `/api/v1/couple-planner/optimize` | Couple's Planner |
| POST | `/api/v1/chat/ask` | Ask FinSage AI |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **AI Model** | Llama 3.3-70B (Meta, open-source) via Groq API |
| **Backend** | Python · FastAPI · Uvicorn · pdfplumber · json-repair |
| **Frontend** | React 18 · Vite · TypeScript · Tailwind CSS · Recharts |
| **Deployment** | Vercel (frontend) · Render (backend) |

---

## Demo Flow

Every page has a **"Load Sample Data"** button — no uploads required.

1. 💊 **Health Score** → Load Sample → radar chart + score gauge
2. 🔥 **FIRE Planner** → age 30, FIRE at 50 → corpus + projection chart
3. 🧾 **Tax Wizard** → Use Sample Form 16 → old vs new regime
4. 📊 **Portfolio X-Ray** → Load Sample → XIRR + overlap matrix
5. 🎯 **Life Events** → select "Bonus" → ₹5L → 30/60/90 day plan
6. 💑 **Couple Planner** → load sample → HRA + SIP split
7. 💬 **Ask AI** → "Which tax regime is better for me?" → instant answer
8. 🧮 **Calculators** → drag sliders → SIP/EMI/Goal results instantly

---

## Why FinSage?

- **95%** of Indians have no formal financial plan
- **₹25,000+** is the annual cost of a human financial advisor
- **₹38,000** average tax savings missed by salaried Indians every year
- FinSage solves all three — for free, in minutes, powered by AI
