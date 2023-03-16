// Solution for: https://leetcode.com/problems/reverse-words-in-a-string-iii/
const reverseWords = (s) => {
    const wordArray = s.split(' ');
    wordArray.forEach((word, index) => {
        wordArray[index] = word.split('').reverse().join('');
    });
    return wordArray.join(' ');
};
// some test cases
console.log(reverseWords("Let's take LeetCode contest")); // "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("God Ding")); // "doG gniD"
