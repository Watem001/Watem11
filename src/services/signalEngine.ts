export interface MarketData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  high: number;
  low: number;
  volume: number;
  timestamp: number;
}

export interface Signal {
  id: string;
  symbol: string;
  type: 'BUY' | 'SELL';
  entry: number;
  tp: number;
  sl: number;
  confidence: number;
  timeframe: string;
  timestamp: number;
  status: 'PENDING' | 'ACTIVE' | 'TP' | 'SL';
  indicators: {
    rsi: number;
    macd: 'BULLISH' | 'BEARISH' | 'NEUTRAL';
    trend: 'UP' | 'DOWN' | 'SIDEWAYS';
    volatility: 'HIGH' | 'LOW' | 'NORMAL';
  };
}

export const calculateSignalScore = (indicators: any) => {
  let score = 0;
  
  // RSI Scoring
  if (indicators.rsi < 30) score += 25; // Oversold
  else if (indicators.rsi > 70) score += 25; // Overbought (for Sell)
  
  // MACD Scoring
  if (indicators.macd === 'BULLISH') score += 20;
  
  // Trend Scoring
  if (indicators.trend === 'UP') score += 20;
  
  // Volatility
  if (indicators.volatility === 'NORMAL') score += 15;
  
  // Support/Resistance
  score += 20; // Simulated bounce/breakout
  
  return Math.min(score, 100);
};

export const generateMockSignals = (symbol: string): Signal => {
  const price = symbol === 'EURUSD' ? 1.0850 : 1.3520;
  const isBuy = Math.random() > 0.5;
  const confidence = 70 + Math.floor(Math.random() * 25);
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    symbol,
    type: isBuy ? 'BUY' : 'SELL',
    entry: price,
    tp: isBuy ? price + 0.0050 : price - 0.0050,
    sl: isBuy ? price - 0.0025 : price + 0.0025,
    confidence,
    timeframe: '15M',
    timestamp: Date.now(),
    status: 'ACTIVE',
    indicators: {
      rsi: isBuy ? 35 : 65,
      macd: isBuy ? 'BULLISH' : 'BEARISH',
      trend: isBuy ? 'UP' : 'DOWN',
      volatility: 'NORMAL'
    }
  };
};
