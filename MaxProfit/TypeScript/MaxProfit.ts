// Solution for: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
const maxProfit = (prices: number[]): number => {

    let maxProfitValue = 0;
    let higherPrice = 0;

    for (let i = prices.length - 1; i >= 0; i--) {
        if (higherPrice < prices[i]) higherPrice = prices[i];

        if (maxProfitValue < higherPrice - prices[i])
        maxProfitValue = higherPrice - prices[i];
    }

    return maxProfitValue;

};






// some test cases
console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0