// Solution for: https://leetcode.com/problems/count-number-of-homogenous-substrings/
const countHomogenous = (s) => {
    const MOD = 1e9 + 7;
    let res = 1;
    let count = 1;
    for (let i = 1; i < s.length; i++) {
        const curr = s.charAt(i);
        const prev = s.charAt(i - 1);
        count = curr === prev ? count + 1 : 1;
        res = (res + count) % MOD;
    }
    return res;
};
// some test cases
console.log(countHomogenous("abbcccaa")); // 13
console.log(countHomogenous("xy")); // 2
console.log(countHomogenous("zzzzz")); // 15
