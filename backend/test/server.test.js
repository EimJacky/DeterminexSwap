"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.get("/quote", (req, res) => res.json({ tokenIn: "ETH", tokenOut: "USDT", amountOut: 100 }));
describe("Backend basic routes", () => {
    it("health should return ok", async () => {
        const res = await (0, supertest_1.default)(app).get("/health");
        expect(res.status).toBe(200);
        expect(res.body.status).toBe("ok");
    });
    it("quote should return mock data", async () => {
        const res = await (0, supertest_1.default)(app).get("/quote");
        expect(res.status).toBe(200);
        expect(res.body.amountOut).toBe(100);
    });
});
