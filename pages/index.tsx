import { useEffect, useState } from 'react';
import { fetchStockData } from '@/lib/fetchStockData';
import { PortfolioTable } from '@/components/PortfolioTable';
import { SectorSummary } from '@/components/SectorSummary';
import { StockData } from '@/types';
import holdingsData from '@/data/holdings.json';

export default function Home() {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await fetchStockData(holdingsData);
      setStocks(data);
      setError(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Failed to load data');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-10 flex items-center gap-3">
          <span role="img" aria-label="chart">📈</span> <span>Portfolio Dashboard</span>
        </h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded mb-6 border border-red-300">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center text-blue-600 font-medium text-lg animate-pulse">
            Fetching latest market data...
          </div>
        ) : (
          <div className="space-y-15">
            <div className="space-y-8">
              <SectorSummary stocks={stocks} />
            </div>
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-300">
              <PortfolioTable stocks={stocks} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
