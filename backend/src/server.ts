import express from "express";
import { getMockQuote } from "./quoteEngine";

const app = express();
const port = 3000;

app.get("/quote", (req, res) => {
    const tokenIn = req.query.tokenIn as string || "ETH";
    const tokenOut = req.query.tokenOut as string || "USDT";
    const amountIn = parseFloat(req.query.amountIn as string) || 1;

    const quote = getMockQuote(tokenIn, tokenOut, amountIn);
    res.json(quote);
});

// 只有直接运行 server.ts 才监听端口
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

// ⚠️ 默认导出
export default app;
