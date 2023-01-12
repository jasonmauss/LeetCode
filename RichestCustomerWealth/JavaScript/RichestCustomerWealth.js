// Solution for: https://leetcode.com/problems/richest-customer-wealth/
const maximumWealth = (accounts) => {
    let maxWealth = 0;
    for (let account of accounts) {
        const sum = account.reduce((runningTotal, nextValue) => runningTotal + nextValue, 0);
        maxWealth = Math.max(maxWealth, sum);
    }
    return maxWealth;
};
// some test cases
console.log(maximumWealth([[1, 2, 3], [3, 2, 1]])); // 6
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]])); // 10
console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])); // 17
