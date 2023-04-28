// Solution for: https://leetcode.com/problems/sum-multiples/
const sumOfMultiples = (n) => {
    if (n < 3)
        return 0;
    let rangeNumbers = [3, 5, 7];
    let multiplesSum = 0;
    for (let i = 3; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            multiplesSum += i;
        }
    }
    return multiplesSum;
};
// some test cases
console.log(sumOfMultiples(7)); // 21
console.log(sumOfMultiples(10)); // 40
console.log(sumOfMultiples(9)); // 30
