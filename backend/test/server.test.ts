import request from "supertest";
import express from "express";

const app = express();
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.get("/quote", (req, res) => res.json({ tokenIn: "ETH", tokenOut: "USDT", amountOut: 100 }));

describe("Backend basic routes", () => {
    it("health should return ok", async () => {
        const res = await request(app).get("/health");
        expect(res.status).toBe(200);
        expect(res.body.status).toBe("ok");
    });

    it("quote should return mock data", async () => {
        const res = await request(app).get("/quote");
        expect(res.status).toBe(200);
        expect(res.body.amountOut).toBe(100);
    });
});
