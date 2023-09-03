// Solution for: https://leetcode.com/problems/length-of-last-word/
const lengthOfLastWord = (s) => {
    return s.trim().split(/\s+/).pop().length;
};
// some test cases
console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6
