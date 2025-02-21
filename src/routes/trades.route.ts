import express from "express";

import * as tradesController from "../controllers/trades.controller";

const tradesRouter = express.Router();

tradesRouter.get("/fetch", tradesController.fetchTrades);
tradesRouter.get("/analyze", tradesController.analyzeTrades);

export default tradesRouter;
