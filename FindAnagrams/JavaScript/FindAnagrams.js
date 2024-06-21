// Solution for: https://leetcode.com/problems/find-all-anagrams-in-a-string/
var findAnagrams = function (s, p) {
    var charMap = new Map();
    for (var _i = 0, p_1 = p; _i < p_1.length; _i++) {
        var char = p_1[_i];
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }
    var matchLength = p.length;
    var count = charMap.size;
    var i = 0;
    var j = 0;
    var anagramsPositions = [];
    while (j < s.length) {
        if (charMap.has(s.charAt(j))) {
            charMap.set(s.charAt(j), charMap.get(s.charAt(j)) - 1);
            if (charMap.get(s.charAt(j)) == 0) {
                count--;
            }
        }
        if (j - i + 1 < matchLength) {
            j++;
        }
        else if (j - i + 1 == matchLength) {
            if (count == 0) {
                anagramsPositions.push(i);
            }
            if (charMap.has(s.charAt(i))) {
                charMap.set(s.charAt(i), charMap.get(s.charAt(i)) + 1);
            }
            if (charMap.get(s.charAt(i)) == 1) {
                count++;
            }
            i++;
            j++;
        }
    }
    return anagramsPositions;
};
// some test cases
console.log(findAnagrams('cbaebabacd', 'abc')); // [0,6]
console.log(findAnagrams('abab', 'ab')); // [0,1,2]
