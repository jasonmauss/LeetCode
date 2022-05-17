// Solution for: https://leetcode.com/problems/substring-with-concatenation-of-all-words/
const findSubstring = (s, words) => {
    return [0];
};
// some test cases
console.log(findSubstring("barfoothefoobarman", ["foo", "bar"])); // [0,9]
console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])); // []
console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"])); // [6,9,12]
