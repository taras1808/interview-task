import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TradeSchema = new Schema({
  _id: { type: Number, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Number, required: true },
  symbol: { type: String, required: true },
});

export const Trade = mongoose.model("Trade", TradeSchema);
