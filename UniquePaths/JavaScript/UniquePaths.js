// Solution for: https://leetcode.com/problems/unique-paths/
const uniquePaths = (m, n) => {
    let currentRow = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            currentRow[j] += currentRow[j - 1];
        }
    }
    return currentRow[n - 1];
};
// some test cases
console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(6, 9)); // 1,287
