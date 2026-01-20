import express from "express";

const app = express();
const port = 3000;

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

app.get("/quote", (req, res) => {
    res.json({ tokenIn: "ETH", tokenOut: "USDT", amountOut: 100 });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
