// Solution for: https://leetcode.com/problems/maximum-length-of-pair-chain/
const findLongestChain = (pairs) => {
    if (pairs.length <= 0)
        return 0;
    const sorted = pairs.sort((a, b) => a[1] - b[1]);
    let result = 1;
    let currentRight = pairs[0][1];
    for (let i = 1; i < pairs.length; i++) {
        if (currentRight < pairs[i][0]) {
            result++;
            currentRight = pairs[i][1];
        }
    }
    return result;
};
// some test cases
console.log(findLongestChain([[1, 2], [2, 3], [3, 4]])); // 2
console.log(findLongestChain([[1, 2], [7, 8], [4, 5]])); // 3
