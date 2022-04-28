// Solution for: https://leetcode.com/problems/find-and-replace-pattern/
const findAndReplacePattern = (words, pattern) => {
    return words.filter((word) => findAndReplacePatternHelper(word, pattern));
};
const findAndReplacePatternHelper = (word, pattern) => {
    const wHash = {};
    const pHash = {};
    for (let i = 0; i < pattern.length; i++) {
        const cW = word[i];
        const cP = pattern[i];
        if ((cW in wHash && wHash[cW] !== cP) ||
            (cP in pHash && pHash[cP] !== cW)) {
            return false;
        }
        wHash[cW] = cP;
        pHash[cP] = cW;
    }
    return true;
};
// some test cases
console.log(findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")); // ["mee","aqq"]
console.log(findAndReplacePattern(["a", "b", "c"], "a")); //["a","b","c"]
