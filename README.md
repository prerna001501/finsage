# FinSage — AI Money Mentor
### ET AI Hackathon 2026 · Track 9: AI Money Mentor

> AI-powered personal finance tools for every Indian. No advisor fees. No signup. No data stored.

🌐 **Live Demo:** [https://finsage-eight.vercel.app](https://finsage-eight.vercel.app)

---

## Features

| # | Feature | What it does |
|---|---------|-------------|
| 1 | 💊 Money Health Score | 360° financial health check across 6 dimensions — radar chart + score gauge |
| 2 | 🔥 FIRE Path Planner | Corpus calculator + monthly SIP target + year-by-year growth projection chart |
| 3 | 🧾 Smart Tax Wizard | Upload Form 16 or enter manually → old vs new regime with step-by-step traceable calculation |
| 4 | 📊 MF Portfolio X-Ray | XIRR returns + fund overlap matrix + expense ratio drag analysis + AI rebalancing plan |
| 5 | 🎯 Life Event Advisor | 30/60/90-day action plans for marriage, baby, job change, bonus, retirement, home purchase |
| 6 | 💑 Couple's Money Planner | HRA optimization + NPS strategy + joint SIP split — India's first AI couple planner |
| 7 | 💬 Ask FinSage AI | Free AI chat for any personal finance question |
| 8 | 🧮 Financial Calculators | SIP, Lumpsum, EMI, Goal Planner — interactive sliders, instant results |
| 9 | 📖 Finance Glossary | 30+ terms explained in plain English |

---

## Live URLs (No Setup Required)

| Service | URL |
|---------|-----|
| 🌐 Frontend | [https://finsage-eight.vercel.app](https://finsage-eight.vercel.app) |
| ⚙️ Backend API | [https://finsage-eg0s.onrender.com](https://finsage-eg0s.onrender.com) |
| ❤️ Health Check | [https://finsage-eg0s.onrender.com/api/v1/health](https://finsage-eg0s.onrender.com/api/v1/health) |

> **Important:** The backend runs on Render's free tier which sleeps after inactivity. **Before demoing, open the health check URL first and wait for `{"status":"ok"}` — this takes up to 30 seconds on first load.** All subsequent requests are fast.

---

## Local Setup (For Judges)

### Prerequisites

| Tool | Required Version | How to verify |
|------|-----------------|---------------|
| Python | **3.11.x** (not 3.12+, not 3.14) | `python --version` |
| Node.js | **18.x or 20.x** | `node --version` |
| npm | any recent | `npm --version` |

> **Python version matters:** pydantic-core requires Python ≤ 3.12. Python 3.14 will fail. If you have multiple Python versions, use `python3.11` explicitly.

---

### Step 1 — Clone the Repository

```bash
git clone https://github.com/prerna001501/finsage.git
cd finsage
```

---

### Step 2 — Get a Free Groq API Key

FinSage uses Meta's **Llama 3.3 70B** model (open-source) via Groq's free API.

1. Go to **[https://console.groq.com](https://console.groq.com)**
2. Sign up with Google (takes 30 seconds, no credit card)
3. Click **"API Keys"** → **"Create API Key"**
4. Copy the key (starts with `gsk_...`)

---

### Step 3 — Create the `.env` File

Create a file named **`.env`** in the root of the project (same level as `backend/` and `frontend/`).

**Option A — Using a text editor (recommended on Windows):**

Open Notepad (or VS Code), create a new file, paste exactly this one line:
```
GROQ_API_KEY=gsk_your_actual_key_here
```
Save as `.env` in the `finsage/` folder. Make sure the filename is `.env` and not `.env.txt`.

**Option B — Terminal (Mac/Linux):**
```bash
echo "GROQ_API_KEY=gsk_your_actual_key_here" > .env
```

**Option C — Terminal (Windows CMD):**
```cmd
echo GROQ_API_KEY=gsk_your_actual_key_here> .env
```
*(no space before `>` on Windows CMD)*

Verify the file exists:
```bash
# Mac/Linux
cat .env

# Windows
type .env
```
Expected output: `GROQ_API_KEY=gsk_...`

---

### Step 4 — Run the Backend

Open a terminal window and run these commands from the **`finsage/` root directory**:

**Mac / Linux:**
```bash
# Create virtual environment
python3.11 -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install -r backend/requirements.txt

# Start backend
python -m uvicorn backend.main:app --reload --port 8000
```

**Windows (Command Prompt):**
```cmd
python -m venv .venv
.venv\Scripts\activate.bat
pip install -r backend\requirements.txt
python -m uvicorn backend.main:app --reload --port 8000
```

**Windows (PowerShell):**
```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r backend\requirements.txt
python -m uvicorn backend.main:app --reload --port 8000
```

**Verify backend is running** — open a browser and visit:
```
http://localhost:8000/api/v1/health
```
You should see:
```json
{"status": "ok", "model": "llama-3.3-70b-versatile", "version": "2.0.0"}
```

---

### Step 5 — Run the Frontend

Open a **second terminal window** (keep the backend running in the first one):

```bash
cd frontend
npm install
npm run dev
```

Open your browser at: **[http://localhost:3000](http://localhost:3000)**

---

### Both Services Must Run Simultaneously

```
Terminal 1 (backend):   python -m uvicorn backend.main:app --reload --port 8000
Terminal 2 (frontend):  cd frontend && npm run dev
```

---

## Demo — No Uploads Required

Every page has a **"Load Sample Data"** or **"Use Sample Form 16"** button. You do not need to upload any PDF to demo any feature.

| Page | Sample Data Button | What you'll see |
|------|--------------------|-----------------|
| 💊 Health Score | "Load Sample Data" | Radar chart + score gauge across 6 dimensions |
| 🔥 FIRE Planner | Pre-filled (just click Generate) | Corpus projection chart + roadmap phases |
| 🧾 Tax Wizard | "Use Sample Form 16" | Old vs new regime with step-by-step calculation |
| 📊 Portfolio X-Ray | "Load Sample Portfolio" | XIRR badge + overlap analysis + rebalancing plan |
| 🎯 Life Events | Select any event → "Load Sample Data" | 30/60/90-day action plan + allocation chart |
| 💑 Couple Planner | "Load Sample Data" | HRA claimant + NPS split + SIP by goal |

### Hackathon Scenario Demo

**Scenario 2 (Tax edge case — step-by-step verifiable):**
1. Go to 🧾 Tax Wizard → click "Use Sample Form 16"
2. Click "Analyze My Tax" — watch the 4-step AI pipeline
3. After results load, click "📜 Show Old Regime Calculation"
4. All 11 calculation steps are shown with IT Act section references

**Scenario 3 (MF Portfolio X-Ray):**
1. Go to 📊 Portfolio X-Ray → click "Load Sample Portfolio"
2. See XIRR, holdings table, fund overlap pairs with % overlap highlighted in red
3. Scroll to "AI Rebalancing Plan" for fund-specific actions with priority levels

---

## Project Structure

```
finsage/
├── .env.example              ← copy to .env and add your Groq key
├── .gitignore
├── README.md
├── ARCHITECTURE.md           ← 5-agent pipeline architecture (submit this)
├── IMPACT_MODEL.md           ← quantified business impact (submit this)
│
├── backend/
│   ├── main.py               # FastAPI app, CORS, 7 routers
│   ├── config.py             # pydantic-settings: reads GROQ_API_KEY from .env
│   ├── llm_client.py         # Groq SDK wrapper with 3-level JSON repair
│   ├── routers/              # health_score, fire_planner, tax_wizard,
│   │                         #   portfolio_xray, life_events, couple_planner, chat
│   ├── services/
│   │   ├── tax_calculator.py     # FY 2024-25 exact slabs — old + new regime
│   │   ├── xirr_calculator.py    # Pure Python Newton-Raphson XIRR
│   │   ├── sip_projector.py      # Month-by-month corpus projection
│   │   ├── portfolio_analyzer.py # Overlap (Jaccard) + expense ratio drag
│   │   └── pdf_parser.py         # pdfplumber Form 16 + CAMS parser
│   ├── prompts/              # LLM system prompts (IT Act + SEBI context embedded)
│   └── sample_data/          # Mock Form 16 + CAMS portfolio JSON
│
└── frontend/
    └── src/
        ├── pages/            # 11 React pages (6 features + home + calculators + more)
        ├── components/
        │   ├── shared/
        │   │   ├── AgentPipeline.tsx  # Animated 4-step pipeline UI
        │   │   ├── Disclaimer.tsx     # SEBI compliance guardrail
        │   │   ├── RadarChart.tsx     # Recharts 6-axis (health score)
        │   │   ├── SipGrowthChart.tsx # Recharts AreaChart (FIRE projection)
        │   │   ├── DonutChart.tsx     # Recharts PieChart (asset allocation)
        │   │   └── ScoreGauge.tsx     # CSS conic-gradient circular gauge
        └── api/client.ts     # Axios: localhost:8000 locally, Vercel proxy in prod
```

---

## API Endpoints

| Method | Path | Feature |
|--------|------|---------|
| GET | `/api/v1/health` | Health check — verify backend is running |
| POST | `/api/v1/health-score/calculate` | Money Health Score |
| POST | `/api/v1/fire-planner/generate` | FIRE Path Planner |
| POST | `/api/v1/tax-wizard/analyze` | Tax Wizard (multipart/form-data) |
| POST | `/api/v1/portfolio-xray/analyze` | MF Portfolio X-Ray (multipart/form-data) |
| POST | `/api/v1/life-events/advise` | Life Event Advisor |
| POST | `/api/v1/couple-planner/optimize` | Couple's Money Planner |
| POST | `/api/v1/chat/ask` | Ask FinSage AI |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **AI Model** | Meta **Llama 3.3 70B** (open-source) via Groq API — extra credit for open-source |
| **Backend** | Python 3.11 · FastAPI · Uvicorn · pdfplumber · json-repair |
| **Finance Math** | Pure Python tax slabs (IT Act FY 2024-25) · Newton-Raphson XIRR |
| **Frontend** | React 19 · Vite · TypeScript · Tailwind CSS · Recharts |
| **Deployment** | Render (backend, free tier) · Vercel (frontend, free tier) |

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `pydantic-core` build error | You are using Python 3.12+ or 3.14. Use Python 3.11 exactly: `python3.11 -m venv .venv` |
| `GROQ_API_KEY not set` or empty responses | Check that `.env` file exists in the root `finsage/` folder (not inside `backend/`). Restart uvicorn after creating the file. |
| `ModuleNotFoundError: No module named 'backend'` | You must run `python -m uvicorn backend.main:app` from the `finsage/` root, not from inside `backend/` |
| Frontend shows "Network Error" | Backend is not running. Start it in a separate terminal first. Check `http://localhost:8000/api/v1/health` |
| `npm install` takes very long | Normal on first run. Wait for it to finish. |
| Port 8000 already in use | `python -m uvicorn backend.main:app --reload --port 8001` — then update `vite.config.ts` proxy target to `8001` |
| `.env.txt` instead of `.env` (Windows) | Windows sometimes adds `.txt`. In File Explorer → View → check "File name extensions". Rename to `.env` |
| Render backend 30s cold start | Visit `https://finsage-eg0s.onrender.com/api/v1/health` and wait for `{"status":"ok"}` before using the live demo |

---

## Why FinSage?

- **95%** of Indians have no formal financial plan
- **₹25,000+** is the annual cost of a human financial advisor
- **₹38,000** average tax savings missed per salaried Indian per year
- FinSage delivers the output of a CA + financial planner + MF advisor in **under 60 seconds, at ₹0 cost**
