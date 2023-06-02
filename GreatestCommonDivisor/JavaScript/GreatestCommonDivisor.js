// Solution for: https://leetcode.com/problems/find-greatest-common-divisor-of-array/
const findGCD = (nums) => {
    let denominator = 0;
    let minVal = Math.min(...nums);
    let maxVal = Math.max(...nums);
    for (let i = 1; i <= minVal; i++) {
        if (minVal % i === 0 && maxVal % i === 0) {
            denominator = Math.max(denominator, i);
        }
    }
    return denominator;
};
// some test cases
console.log(findGCD([2, 5, 6, 9, 10])); // 2
console.log(findGCD([7, 5, 6, 8, 3])); // 1
console.log(findGCD([3, 3])); // 3
