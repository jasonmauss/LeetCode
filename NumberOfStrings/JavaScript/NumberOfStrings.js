// Solution for: https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/
const numOfStrings = (patterns, word) => {
    let substrings = 0;
    for (const pattern of patterns) {
        if (word.indexOf(pattern) !== -1) {
            substrings++;
        }
    }
    return substrings;
};
// some test cases
console.log(numOfStrings(["a", "abc", "bc", "d"], "abc")); // 3
console.log(numOfStrings(["a", "b", "c"], "aaaaabbbbb")); // 2
console.log(numOfStrings(["a", "a", "a"], "ab")); // 3
