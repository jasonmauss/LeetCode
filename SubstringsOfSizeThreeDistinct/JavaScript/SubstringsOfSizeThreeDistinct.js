// Solution for: https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
var countGoodSubstrings = function (s) {
    var n = s.length;
    if (n < 3)
        return 0;
    var count = 0;
    var stringArray = [s[0], s[1]];
    for (var i = 2; i < n; i++) {
        stringArray.push(s[i]);
        if (new Set(stringArray).size === 3) {
            count++;
        }
        stringArray.shift();
    }
    return count;
};
// some test cases
console.log(countGoodSubstrings("xyzzaz")); // 1
console.log(countGoodSubstrings("aababcabc")); // 4
