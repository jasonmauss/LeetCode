// Solution for: https://leetcode.com/problems/check-if-it-is-a-good-array/
const isGoodArray = (nums) => {
    let result = nums.shift();
    for (let i of nums) {
        while (i)
            [result, i] = [i, result % i];
    }
    return result === 1;
};
// some test cases
console.log(isGoodArray([12, 5, 7, 23])); // true
console.log(isGoodArray([29, 6, 10])); // true
console.log(isGoodArray([3, 6])); // false
