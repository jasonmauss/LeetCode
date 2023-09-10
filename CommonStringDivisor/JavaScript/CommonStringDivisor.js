// Solution for: https://leetcode.com/problems/greatest-common-divisor-of-strings/
const gcdOfStrings = (str1, str2) => {
    const length = str2.length;
    let greatestCommonDivisor = '';
    for (let i = 0; i < length; i++) {
        const gcdFromBeginning = str2.substring(0, (length - (i + 1)));
        const gcdFromEnd = str2.substring(length - 1 - i);
        if (str1.replaceAll(gcdFromBeginning, '') == '' &&
            str2.replaceAll(gcdFromBeginning, '') == '') {
            if (greatestCommonDivisor.length < gcdFromBeginning.length) {
                greatestCommonDivisor = gcdFromBeginning;
            }
        }
        if (str1.replaceAll(gcdFromEnd, '') === '' &&
            str2.replaceAll(gcdFromEnd, '') === '') {
            if (greatestCommonDivisor.length < gcdFromEnd.length) {
                greatestCommonDivisor = gcdFromEnd;
            }
        }
    }
    return greatestCommonDivisor;
};
// some test cases
console.log(gcdOfStrings("ABCABC", "ABC")); // "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // "AB"
console.log(gcdOfStrings("LEET", "CODE")); // ""
