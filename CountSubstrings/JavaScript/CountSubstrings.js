// Solution for: https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/description/
const countSubstrings = (s, c) => {
    const occurenceCount = s.split('').filter((x) => x === c).length;
    return occurenceCount * (occurenceCount + 1) / 2;
};
// some test cases
console.log(countSubstrings('abada', 'a')); // 6
console.log(countSubstrings('zzz', 'z')); // 6
