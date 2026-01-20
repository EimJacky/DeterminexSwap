export interface RouteLeg {
    dex: string;
    pool: string;
    amount: number;
}

export interface Quote {
    tokenIn: string;
    tokenOut: string;
    amountIn: number;
    amountOut: number;
    route: RouteLeg[];
}

// 最小闭环 mock quote
export function getMockQuote(tokenIn: string, tokenOut: string, amountIn: number): Quote {
    return {
        tokenIn,
        tokenOut,
        amountIn,
        amountOut: amountIn * 100,  // 假设 1 ETH = 100 USDT
        route: [
            { dex: "UniswapV3", pool: `${tokenIn}/${tokenOut}`, amount: amountIn }
        ]
    };
}
