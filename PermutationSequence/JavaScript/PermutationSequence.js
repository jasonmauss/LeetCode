// Solution for: https://leetcode.com/problems/permutation-sequence/
const factorial = (n) => {
    return n > 1 ? n * factorial(n - 1) : 1;
};
const getPermutation = (n, k) => {
    let result = '';
    let nums = '123456789'.split('');
    --k;
    for (let i = n; i >= 1; i--) {
        let j = Math.floor(k / factorial(i - 1));
        k = k % factorial(i - 1);
        result += nums[j];
        nums.splice(j, 1);
    }
    return result;
};
// some test casese
console.log(getPermutation(3, 3)); // 213
console.log(getPermutation(4, 9)); // 2314
console.log(getPermutation(3, 1)); // 123
