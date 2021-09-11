// Solution for: https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
var isPrefixOfWord = function (sentence, searchWord) {
    if (sentence.length < 1 || searchWord.length < 1)
        return -1;
    var returnValue = -1;
    var words = sentence.split(' ');
    for (var i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) {
            returnValue = i + 1;
            break;
        }
    }
    return returnValue;
};
// some test cases
console.log(isPrefixOfWord("i love eating burger", "burg")); // 4
console.log(isPrefixOfWord("this problem is an easy problem", "pro")); // 2
console.log(isPrefixOfWord("i am tired", "you")); // -1
console.log(isPrefixOfWord("i use triple pillow", "pill")); // 4
console.log(isPrefixOfWord("hello from the other side", "they")); // -1
