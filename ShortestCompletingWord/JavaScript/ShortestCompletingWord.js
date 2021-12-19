// Solution for: https://leetcode.com/problems/shortest-completing-word/
var shortestCompletingWord = function (licensePlate, words) {
    var completingWord = '';
    var wordFound = false;
    // get alpha chars only, and into an array
    var licensePlateChars = licensePlate.toUpperCase().replace(/[^A-Z]/g, '').split('');
    words.forEach(function (word) {
        if (!wordFound || word.length < completingWord.length) {
            var newWord_1 = word.toUpperCase();
            licensePlateChars.forEach(function (lpChar) {
                newWord_1 = newWord_1.replace(lpChar, '');
            });
            if (word.length - licensePlateChars.length === newWord_1.length) {
                completingWord = word;
                wordFound = true;
            }
        }
    });
    return completingWord;
};
// some test cases
console.log(shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])); // "steps'"
console.log(shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"])); // "pest'"
