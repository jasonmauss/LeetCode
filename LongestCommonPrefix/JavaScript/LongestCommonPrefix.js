// Solution for: https://leetcode.com/problems/longest-common-prefix/
var longestCommonPrefix = function (strs) {
    if (strs && strs.length > 0) {
        // start off by making the first string the longest prefix
        // then start comparing from the second word onward in the
        // loop below
        var longestPrefix = strs[0];
        for (var i = 1; i < strs.length; i++) {
            var matchingString = strs[i];
            // keep removing the last letter of the prefix string
            // until a potential prefix match is found using .slice()
            while (matchingString.indexOf(longestPrefix) !== 0) {
                longestPrefix = longestPrefix.slice(0, longestPrefix.length - 1);
                if (longestPrefix.length === 0) {
                    return '';
                }
            }
        }
        return longestPrefix;
    }
    else {
        return '';
    }
};
// some test cases
console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ''
console.log(longestCommonPrefix(['break', 'breakfast', 'bread'])); // 'brea'
