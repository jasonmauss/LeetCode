// Solution for: https://leetcode.com/problems/reverse-words-in-a-string/
const reverseWords = (s) => {
    const wordArray = s.trim().split(/\s+/);
    return wordArray.reverse().join(' ');
};
// some test cases
console.log(reverseWords('the sky is blue')); // 'blue is sky the'
console.log(reverseWords('  hello world  ')); // 'world hello'
console.log(reverseWords('a good   example')); // 'example good a'
