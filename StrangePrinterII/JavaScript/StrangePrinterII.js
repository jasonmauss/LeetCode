// Solution for: https://leetcode.com/problems/strange-printer-ii/
const isPrintable = (targetGrid) => {
    return false;
};
// some test cases
console.log(isPrintable([[1, 1, 1, 1], [1, 2, 2, 1], [1, 2, 2, 1], [1, 1, 1, 1]])); // true
console.log(isPrintable([[1, 1, 1, 1], [1, 1, 3, 3], [1, 1, 3, 4], [5, 5, 1, 4]])); // true
console.log(isPrintable([[1, 2, 1], [2, 1, 2], [1, 2, 1]])); // false
