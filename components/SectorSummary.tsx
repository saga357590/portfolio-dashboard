import React from 'react';
import { StockData } from '@/types';

interface Props {
  stocks: StockData[];
}

interface SectorGroup {
  sector: string;
  totalInvestment: number;
  totalValue: number;
  gainLoss: number;
}

export const SectorSummary: React.FC<Props> = ({ stocks }) => {
  const grouped: Record<string, SectorGroup> = {};

  stocks.forEach((stock) => {
    if (!grouped[stock.sector]) {
      grouped[stock.sector] = {
        sector: stock.sector,
        totalInvestment: 0,
        totalValue: 0,
        gainLoss: 0,
      };
    }

    grouped[stock.sector].totalInvestment += stock.investment;
    grouped[stock.sector].totalValue += stock.presentValue;
    grouped[stock.sector].gainLoss += stock.gainLoss;
  });

  const sectorList = Object.values(grouped);

  return (
    <div className="grid md:grid-cols-2 gap-4 mb-8">
      {sectorList.map((sector) => (
        <div
          key={sector.sector}
          className="p-4 rounded-lg shadow-sm border border-gray-200 bg-white"
        >
          <h2 className="text-xl font-semibold mb-2">{sector.sector}</h2>
          <p>💸 Investment: ₹{sector.totalInvestment.toFixed(2)}</p>
          <p>📈 Present Value: ₹{sector.totalValue.toFixed(2)}</p>
          <p className={`font-semibold ${sector.gainLoss >= 0 ? 'text-green-600' : 'text-red-500'}`}>
            📊 Gain/Loss: ₹{sector.gainLoss.toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
};
