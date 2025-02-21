import { Request, Response } from "express";

import * as tradesService from "../services/trades.service";

export const fetchTrades = async (req: Request, res: Response) => {
  try {
    const { symbol } = req.query;
    if (!symbol || typeof symbol !== "string") {
      res.status(400).end();
      return;
    }

    await tradesService.fetchTrades({
      symbol,
    });

    res.send({ success: true });
  } catch (e) {
    res.status(500).send({
      message: e instanceof Error ? e.message : "something went wrong",
    });
    return;
  }
};

export const analyzeTrades = async (req: Request, res: Response) => {
  try {
    const { symbol } = req.query;
    if (!symbol || typeof symbol !== "string") {
      res.status(400).end();
      return;
    }

    const data = await tradesService.analyzeTrades({
      symbol,
    });

    res.send(data);
  } catch (e) {
    res.status(500).send({
      message: e instanceof Error ? e.message : "something went wrong",
    });
    return;
  }
};
