// Solution for: https://leetcode.com/problems/unique-morse-code-words/
var uniqueMorseRepresentations = function (words) {
    var morseCodes = [
        ".-", "-...", "-.-.", "-..", ".", "..-.",
        "--.", "....", "..", ".---",
        "-.-", ".-..", "--", "-.", "---", ".--.",
        "--.-", ".-.", "...", "-", "..-", "...-",
        ".--", "-..-", "-.--", "--.."
    ];
    var morseTransformations = new Set();
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var transformation = '';
        for (var _a = 0, word_1 = word; _a < word_1.length; _a++) {
            var letter = word_1[_a];
            var charIndex = letter.charCodeAt(0) - 97;
            transformation += morseCodes[charIndex];
        }
        morseTransformations.add(transformation);
    }
    return morseTransformations.size;
};
// some test cases
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])); // 2
console.log(uniqueMorseRepresentations(["a"])); // 1
