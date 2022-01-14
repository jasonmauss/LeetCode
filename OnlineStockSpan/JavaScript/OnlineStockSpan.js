// Solution for: https://leetcode.com/problems/online-stock-span/
var StockSpanner = /** @class */ (function () {
    function StockSpanner() {
        this.stockPrices = [];
    }
    StockSpanner.prototype.next = function (price) {
        var daySpan = 1;
        while (this.stockPrices.length > 0 && price > this.stockPrices[this.stockPrices.length - 1][0]) {
            daySpan += this.stockPrices[this.stockPrices.length - 1][1];
            this.stockPrices.pop();
        }
        this.stockPrices.push([price, daySpan]);
        return daySpan;
    };
    return StockSpanner;
}());
/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// some test cases
console.log(); // 
