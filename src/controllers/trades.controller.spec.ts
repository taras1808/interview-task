import { describe, expect, jest } from "@jest/globals";
import {
  analyzeTrades as analyzeTradesEndpoint,
  fetchTrades as fetchTradesEndpoint,
} from "./trades.controller";
import { Request, Response } from "express";

describe("fetchTrades", () => {
  it("returns bad request when symbol was not provided in query", async () => {
    const req = {
      query: {},
    } as unknown as Request;
    const res = {
      status: jest.fn(() => ({
        end: jest.fn(),
      })),
    } as unknown as Response;

    await fetchTradesEndpoint(req, res);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(400);
  });
});

describe("analyzeTrades", () => {
  it("returns bad request when symbol was not provided in query", async () => {
    const req = {
      query: {},
    } as unknown as Request;
    const res = {
      status: jest.fn(() => ({
        end: jest.fn(),
      })),
    } as unknown as Response;

    await analyzeTradesEndpoint(req, res);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(400);
  });
});
