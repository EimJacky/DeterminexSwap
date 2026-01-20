import { expect } from "chai";
import request from "supertest";
import app from "../src/server"; // 假设你把 Express app 导出

describe("Server API", () => {
    it("GET /quote should return mock quote", async () => {
        const res = await request(app)
            .get("/quote?tokenIn=ETH&tokenOut=USDT&amountIn=1");

        expect(res.status).to.equal(200);
        expect(res.body.tokenIn).to.equal("ETH");
        expect(res.body.tokenOut).to.equal("USDT");
        expect(res.body.amountIn).to.equal(1);
        expect(res.body.amountOut).to.equal(100);
        expect(res.body.route).to.be.an("array").that.has.lengthOf(1);
    });
});
