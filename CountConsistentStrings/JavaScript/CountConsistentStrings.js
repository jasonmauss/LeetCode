// Solution for: https://leetcode.com/problems/count-the-number-of-consistent-strings/description/
const countConsistentStrings = (allowed, words) => {
    let consistentStrings = 0;
    const allowedArray = allowed.split('');
    const allowedChars = new Set(allowedArray);
    for (let word of words) {
        let isConsistent = false;
        for (let char of word.split('')) {
            if (allowedChars.has(char)) {
                isConsistent = true;
                continue;
            }
            else {
                isConsistent = false;
                break;
            }
        }
        if (isConsistent)
            consistentStrings++;
    }
    return consistentStrings;
};
// some test cases
console.log(countConsistentStrings('ab', ["ad", "bd", "aaab", "baa", "badab"])); // 2
console.log(countConsistentStrings('abc', ["a", "b", "c", "ab", "ac", "bc", "abc"])); // 7
console.log(countConsistentStrings('cad', ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"])); // 4
