// Solution for: https://leetcode.com/problems/merge-strings-alternately/
const mergeAlternately = (word1, word2) => {
    const lengthOfLongestWord = Math.max(word1.length, word2.length);
    let mergedWord = '';
    for (let charIndex = 0; charIndex < lengthOfLongestWord; charIndex++) {
        if (word1.length > charIndex) {
            mergedWord += word1[charIndex];
        }
        if (word2.length > charIndex) {
            mergedWord += word2[charIndex];
        }
    }
    return mergedWord;
};
// some test cases
console.log(mergeAlternately("abc", "pqr")); // apbqcr
console.log(mergeAlternately("ab", "pqrs")); // apbqrs
console.log(mergeAlternately("abcd", "pq")); // apbqcd
