// Solution for: https://leetcode.com/problems/a-number-after-a-double-reversal/
const isSameAfterReversals = (num) => {
    let reverseNum = Number(num.toString().split('').reverse().join(''));
    let doubleReverseNum = Number(reverseNum.toString().split('').reverse().join(''));
    return num === doubleReverseNum;
};
// some test cases
console.log(isSameAfterReversals(526)); // true
console.log(isSameAfterReversals(1800)); // false
console.log(isSameAfterReversals(0)); // true
