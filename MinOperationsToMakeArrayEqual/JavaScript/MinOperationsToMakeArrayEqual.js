// Solution for: https://leetcode.com/problems/minimum-operations-to-make-array-equal/
const minOperations = (n) => {
    return (n % 2 === 0 ? (n * n) / 4 : (n * n - 1) / 4);
};
// some test cases
console.log(minOperations(3)); // 2
console.log(minOperations(6)); // 9
