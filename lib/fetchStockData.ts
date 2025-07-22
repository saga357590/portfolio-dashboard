import { Holding, StockData } from '@/types';

export async function fetchStockData(holdings: Holding[]): Promise<StockData[]> {
  const totalInvestment = holdings.reduce((sum, h) => sum + h.purchasePrice * h.quantity, 0);

  return holdings.map((holding) => {
    const cmp = mockCMP(holding.name);
    const peRatio = mockPERatio(holding.name);
    const earnings = mockEarnings(holding.name);

    const investment = holding.purchasePrice * holding.quantity;
    const presentValue = cmp * holding.quantity;
    const gainLoss = presentValue - investment;
    const portfolioWeight = (investment / totalInvestment) * 100;

    return {
      ...holding,
      cmp,
      peRatio,
      earnings,
      investment,
      presentValue,
      gainLoss,
      portfolioWeight: parseFloat(portfolioWeight.toFixed(2)),
    };
  });
}

function mockCMP(name: string): number {
  return Math.floor(Math.random() * 1000) + 1000;
}

function mockPERatio(name: string): number {
  return Math.random() * 30 + 5;
}

function mockEarnings(name: string): number {
  return Math.floor(Math.random() * 200) + 100;
}
