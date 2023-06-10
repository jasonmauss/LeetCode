// Solution for: https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
const finalPrices = (prices: number[]): number[] => {

    const discountAppliedPrices = [];

    for(let i = 0; i < prices.length; i++) {

        const discountEligible = prices.slice(i + 1);
        const discount = discountEligible.find(x => x <= prices[i]);
        discountAppliedPrices.push(prices[i] - (discount || 0));
               
    }

    return discountAppliedPrices;
};






// some test cases
console.log(finalPrices([8,4,6,2,3])); //[4,2,4,2,3]
console.log(finalPrices([1,2,3,4,5])); //[1,2,3,4,5]
console.log(finalPrices([10,1,1,6])); //[9,0,1,6]