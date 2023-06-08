// Solution for: https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/
const areOccurrencesEqual = (s) => {
    const occurences = {};
    for (let i = 0; i < s.length; i++) {
        occurences[s[i]] = occurences[s[i]] || {};
        occurences[s[i]] = Number(occurences[s[i]]) + 1 || Number(1);
    }
    let occurenceCount;
    for (const property in occurences) {
        if (!occurenceCount) {
            occurenceCount = occurences[property];
        }
        else {
            if (occurenceCount != occurences[property]) {
                return false;
            }
        }
    }
    return true;
};
// some test cases
console.log(areOccurrencesEqual("abacbc")); // true
console.log(areOccurrencesEqual("aaabb")); // false
