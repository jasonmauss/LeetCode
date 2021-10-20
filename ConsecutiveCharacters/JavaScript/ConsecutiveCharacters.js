// Solution for: https://leetcode.com/problems/consecutive-characters/
var maxPower = function (s) {
    if (s === '')
        return 0;
    if (s.length === 1)
        return 1;
    var longestConsecutive = 1;
    var prevChar = s[0];
    var currentConsecutiveCount = 1;
    for (var i = 1; i < s.length; i++) {
        if (s[i] === prevChar) {
            currentConsecutiveCount++;
        }
        else {
            longestConsecutive = Math.max(longestConsecutive, currentConsecutiveCount);
            currentConsecutiveCount = 1;
        }
        prevChar = s[i];
    }
    longestConsecutive = Math.max(longestConsecutive, currentConsecutiveCount);
    return longestConsecutive;
};
// some test cases
console.log(maxPower("leetcode")); // 2
console.log(maxPower("abbcccddddeeeeedcba")); // 5
console.log(maxPower("triplepillooooow")); // 5
console.log(maxPower("hooraaaaaaaaaaay")); // 11
console.log(maxPower("tourist")); // 1
