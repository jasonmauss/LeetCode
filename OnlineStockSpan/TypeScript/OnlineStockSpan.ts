// Solution for: https://leetcode.com/problems/online-stock-span/
class StockSpanner {
    
    private stockPrices:number[][];

    constructor() {
        this.stockPrices = [];
    }

    next(price: number): number {
        
        let daySpan:number = 1;

        while (this.stockPrices.length > 0 && price > this.stockPrices[this.stockPrices.length - 1][0]) {
            daySpan += this.stockPrices[this.stockPrices.length - 1][1];
            this.stockPrices.pop();
        }

        this.stockPrices.push([price, daySpan]);

        return daySpan;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

// some test cases
console.log(); // 