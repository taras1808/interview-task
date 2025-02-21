import axios from "axios";
import { TradeDto } from "../dtos/trades/binance.dto";
import { Trade } from "../models/trade";
import { AnalyzeTradesDto } from "../dtos/trades/analyse-trades.dto";

export const fetchTrades = async ({ symbol }: { symbol: string }) => {
  const response = await axios.get<TradeDto[]>(
    "https://api.binance.com/api/v3/historicalTrades",
    {
      params: {
        symbol,
        limit: 1000,
      },
    }
  );

  const trades = response.data.map((trade) => ({
    _id: trade.id,
    timestamp: trade.time,
    price: parseFloat(trade.price),
    symbol,
  }));

  await Trade.insertMany(trades);

  return trades;
};

export const analyzeTrades = async ({ symbol }: { symbol: string }) => {
  const trades = await Trade.find({ symbol });
  const result: AnalyzeTradesDto[] = [];

  if (trades.length < 2) {
    return result;
  }

  for (let i = 1; i < trades.length; i++) {
    const prevTrade = trades[i - 1];
    const currTrade = trades[i];
    result.push({
      timestamp: currTrade.timestamp,
      change: prevTrade.price - currTrade.price,
    });
  }

  return result;
};
