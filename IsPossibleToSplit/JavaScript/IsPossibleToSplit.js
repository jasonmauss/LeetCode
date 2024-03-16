// Solution for: https://leetcode.com/problems/split-the-array/
const isPossibleToSplit = (nums) => {
    const digits = {};
    for (const num of nums) {
        digits[num] = digits[num] ? digits[num] += 1 : digits[num] = 1;
    }
    for (const prop in digits) {
        if (digits[prop] > 2) {
            return false;
        }
    }
    return true;
};
// some test cases
console.log(isPossibleToSplit([1, 1, 2, 2, 3, 4])); // true
console.log(isPossibleToSplit([1, 1, 1, 1])); // false
console.log(isPossibleToSplit([8, 9, 8, 5, 9, 3, 3, 1, 2, 1])); // true
