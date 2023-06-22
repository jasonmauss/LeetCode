// Solution for: https://leetcode.com/problems/number-of-valid-words-in-a-sentence/
const isValidToken = (token) => {
    if (/\d/.test(token))
        return false;
    if ((token.match(/-/g) || []).length > 1)
        return false;
    if (token.match(/,|.|!/g).length > 1)
        return false;
};
const countValidWords = (sentence) => {
    // keep track of the number of "valid word" tokens found
    let validTokens = 0;
    // split the string by number of whitespace chars
    const tokens = sentence.split(/\s+/);
    for (const token of tokens) {
        if (isValidToken(token))
            validTokens++;
    }
    return validTokens;
};
// some test cases
console.log(countValidWords("cat and  dog")); // 3
console.log(countValidWords("!this  1-s b8d!")); // 0
console.log(countValidWords("alice and  bob are playing stone-game10")); // 5
