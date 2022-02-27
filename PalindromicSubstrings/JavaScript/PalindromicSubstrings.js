// Solution for: https://leetcode.com/problems/palindromic-substrings/
const countSubstrings = (s) => {
    let count = 0;
    const length = s.length;
    for (let i = 0; i < length; i++) {
        for (let j = i; j < i + 2; j++) {
            let left = i, right = j;
            while (s[left] && s[right] && s[left] === s[right]) {
                count++;
                left--;
                right++;
            }
        }
    }
    return count;
};
// some test cases
console.log(countSubstrings("abc")); //  3
console.log(countSubstrings("aaa")); //  6
