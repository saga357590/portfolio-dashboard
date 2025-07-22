# 📊 Portfolio Dashboard

A full-stack portfolio tracker that fetches real-time market data using Yahoo Finance/Google APIs. Built with **Next.js**, **React**, **Tailwind CSS**, and **TypeScript**.

## 🚀 Features

* 🔄 **Live updates** every 15 seconds
* 📁 **Grouped by Sector** for easier insights
* 📊 **Table view** of all stock holdings
* 📐 **Dynamic gain/loss indicators**
* 💡 Error handling and loading states

## 🛠 Tech Stack

* **Frontend**: React 19 + Next.js 15 + Tailwind CSS 4
* **Backend (data fetching)**: Axios
* **Type Checking**: TypeScript
* **Table Management**: react-table

## 📁 Folder Structure

```
portfolio-dashboard/
├── components/           # Reusable UI components
│   ├── PortfolioTable.tsx
│   └── SectorSummary.tsx
├── data/                 # Static JSON holdings file
│   └── holdings.json
├── lib/                  # External API logic
│   └── fetchStockData.ts
├── pages/                # Next.js routes
│   └── index.tsx         # Main dashboard
├── styles/               # Tailwind + global CSS
│   └── globals.css
├── types/                # TypeScript types
│   └── index.d.ts
├── utils/                # Portfolio calculations
│   └── calculatePortfolio.ts
```

## 🧪 Getting Started

1. **Clone repo**

```bash
git clone https://github.com/saga357590/portfolio-dashboard
cd portfolio-dashboard
```

2. **Install dependencies**

```bash
npm install --legacy-peer-deps
```

3. **Run the app**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🌐 Deployed to vercel




## 📌 Notes

* This dashboard is frontend-only with live public API access
* To customize holdings, update `data/holdings.json`
* Refreshes every 15 seconds for live stock data

---

Built by Sagar Reddy