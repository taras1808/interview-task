import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import tradesRouter from "./src/routes/trades.route";

mongoose
  .connect("mongodb://127.0.0.1:27017/binance")
  .then(() => console.log("DB Connected!"));

dotenv.config();

const app = express();

app.use(json());
app.use("/trades", tradesRouter);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
