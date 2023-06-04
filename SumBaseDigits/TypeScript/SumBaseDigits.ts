// Solution for: https://leetcode.com/problems/sum-of-digits-in-base-k/
const sumBase = (n: number, k: number): number => {

    let sumOfDigits = 0;

    let digits = n.toString(k).split('');
    let numbers = [];

    for(let digit of digits) {
        numbers.push(parseInt(digit));
    }

    sumOfDigits = numbers.reduce((a, b) => a + b, 0);

    return sumOfDigits;

};







// some test cases
console.log(sumBase(34, 6)); // 9
console.log(sumBase(10, 10)); // 1