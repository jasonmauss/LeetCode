// Solution for: https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
const subtractProductAndSum = (n) => {
    const digitValues = n.toString().split('');
    let sumOfDigits = 0;
    let productOfDigits = 1; // initialize to 1 so first multiplication results in that number being the product.
    for (let digit of digitValues) {
        productOfDigits *= Number(digit);
        sumOfDigits += Number(digit);
    }
    return productOfDigits - sumOfDigits;
};
// some test cases
console.log(subtractProductAndSum(234)); // 15
console.log(subtractProductAndSum(4421)); // 21
console.log(subtractProductAndSum(1492)); // 56
