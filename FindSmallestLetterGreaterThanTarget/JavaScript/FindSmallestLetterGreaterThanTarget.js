// Solution for: https://leetcode.com/problems/find-smallest-letter-greater-than-target/
var nextGreatestLetter = function (letters, target) {
    // get the targetCharCode every time since we will use it no matter what the logic ends up being
    var targetCharCode = target.charCodeAt(0);
    // if the target is past the end of the letters, then just grab the first letter from the array
    if (targetCharCode >= letters[letters.length - 1].charCodeAt(0)) {
        return letters[0];
    }
    else {
        // return the first letter in the array with a greater value than the target
        for (var i = 0; i < letters.length; i++) {
            if (letters[i].charCodeAt(0) > targetCharCode) {
                return letters[i];
            }
        }
    }
};
// some test cases
console.log(nextGreatestLetter(["c", "f", "j"], 'a')); // 'c'
console.log(nextGreatestLetter(["c", "f", "j"], 'c')); // 'f'
console.log(nextGreatestLetter(["c", "f", "j"], 'd')); // 'f'
console.log(nextGreatestLetter(["c", "f", "j"], 'g')); // 'j'
console.log(nextGreatestLetter(["c", "f", "j"], 'j')); // 'c'
console.log(nextGreatestLetter(["a", "b", "y"], 'z')); // 'a'
