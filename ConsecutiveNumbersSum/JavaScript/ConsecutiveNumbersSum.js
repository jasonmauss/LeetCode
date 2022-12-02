// Solution for: https://leetcode.com/problems/consecutive-numbers-sum/
const consecutiveNumbersSum = (n) => {
    let count = 1;
    for (let item = 2; item < Math.sqrt(2 * n); item++) {
        if ((n - (item + 1) * item / 2) % item === 0) {
            count++;
        }
    }
    return count;
};
// some test cases
console.log(consecutiveNumbersSum(5)); // 2
console.log(consecutiveNumbersSum(9)); // 3
console.log(consecutiveNumbersSum(15)); // 4
