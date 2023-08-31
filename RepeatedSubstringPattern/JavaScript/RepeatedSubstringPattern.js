// Solution for: https://leetcode.com/problems/repeated-substring-pattern/
const repeatedSubstringPattern = (s) => {
    const stringHalfLength = Math.ceil(s.length / 2);
    const allElementsAreEmpty = (stringArray) => {
        for (const string of stringArray) {
            if (string.length > 0) {
                return false;
            }
        }
        return true;
    };
    for (let i = 0; i <= stringHalfLength; i++) {
        const subStringTest = s.substring(0, i);
        const testArray = s.split(subStringTest);
        if (allElementsAreEmpty(testArray) && testArray.length > 2) {
            return true;
        }
    }
    return false;
};
// some test cases
console.log(repeatedSubstringPattern("abab")); // true
console.log(repeatedSubstringPattern("aba")); // false
console.log(repeatedSubstringPattern("abcabcabcabc")); // true
