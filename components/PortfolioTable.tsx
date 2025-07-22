import React from 'react';
import { StockData } from '@/types';

interface Props {
  stocks: StockData[];
}

export const PortfolioTable: React.FC<Props> = ({ stocks }) => {
  return (
    <div className="overflow-auto mt-8">
      <table className="min-w-full text-sm border border-gray-200">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-2 text-left">Stock</th>
            <th className="p-2">Qty</th>
            <th className="p-2">Buy Price</th>
            <th className="p-2">Investment</th>
            <th className="p-2">CMP</th>
            <th className="p-2">Present Value</th>
            <th className="p-2">Gain / Loss</th>
            <th className="p-2">P/E</th>
            <th className="p-2">Earnings</th>
            <th className="p-2">Weight (%)</th>
            <th className="p-2">Exchange</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, idx) => (
            <tr key={idx} className="text-center border-t border-gray-200">
              <td className="p-2 text-left font-medium">{stock.name}</td>
              <td className="p-2">{stock.quantity}</td>
              <td className="p-2">₹{stock.purchasePrice.toFixed(2)}</td>
              <td className="p-2">₹{stock.investment.toFixed(2)}</td>
              <td className="p-2 text-blue-600 font-semibold">₹{stock.cmp.toFixed(2)}</td>
              <td className="p-2">₹{stock.presentValue.toFixed(2)}</td>
              <td className={`p-2 font-semibold ${stock.gainLoss >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                ₹{stock.gainLoss.toFixed(2)}
              </td>
              <td className="p-2">{stock.peRatio.toFixed(2)}</td>
              <td className="p-2">₹{stock.earnings.toFixed(2)}</td>
              <td className="p-2">{stock.portfolioWeight.toFixed(2)}%</td>
              <td className="p-2">{stock.exchange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
