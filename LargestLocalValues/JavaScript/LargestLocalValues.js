// Solution for: https://leetcode.com/problems/largest-local-values-in-a-matrix/
const largestLocal = (grid) => {
    return [[0]];
};
// some test cases
console.log(largestLocal([[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]])); // [[9,9],[8,6]]
console.log(largestLocal([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 2, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]])); // [[2,2,2],[2,2,2],[2,2,2]]
