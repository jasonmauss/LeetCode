// Solution for: https://leetcode.com/problems/is-subsequence/
const isSubsequence = (s, t) => {
    if (s.length > t.length)
        return false;
    let positionPlaceholder = 0;
    let charsFound = 0;
    for (let i = 0; i < s.length; i++) {
        let searchChar = s[i];
        let foundChar = false;
        for (let j = positionPlaceholder; j < t.length; j++) {
            positionPlaceholder = j;
            if (searchChar === t[j]) {
                foundChar = true;
                charsFound++;
                positionPlaceholder++;
                break;
            }
        }
        if (charsFound < s.length && ((!foundChar && positionPlaceholder === t.length - 1) ||
            (foundChar && positionPlaceholder === t.length)))
            return false;
    }
    return true;
};
// some test cases
console.log(isSubsequence('abc', 'ahbgdc')); // true
console.log(isSubsequence('axc', 'ahbgdc')); // false
console.log(isSubsequence('abcd', 'ahehybgqwedcgrghtedegtet')); // true
console.log(isSubsequence('abcd', 'ahehybgqwedcgrghteegtet')); // false
console.log(isSubsequence('aaaaaa', 'bbaaaa')); // false
