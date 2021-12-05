// Solution for: https://leetcode.com/problems/maximum-repeating-substring/
var maxRepeating = function (sequence, word) {
    var returnVal = 0;
    while (sequence.includes(word.repeat(returnVal + 1))) {
        returnVal += 1;
    }
    ;
    return returnVal;
};
// some test cases
console.log(maxRepeating("ababc", "ab")); // 2
console.log(maxRepeating("ababc", "ba")); // 1
console.log(maxRepeating("ababc", "ac")); // 0
