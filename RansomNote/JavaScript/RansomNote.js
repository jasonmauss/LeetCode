// Solution for: https://leetcode.com/problems/ransom-note/
var canConstruct = function (ransomNote, magazine) {
    for (var i = 0; i < ransomNote.length; i++) {
        var letter = ransomNote.substring(i, i + 1);
        if (magazine.indexOf(letter) == -1)
            return false;
        magazine = magazine.replace(letter, '');
    }
    return true;
};
// some test cases
console.log(canConstruct('a', 'b')); // false
console.log(canConstruct('aa', 'ab')); // false
console.log(canConstruct('aa', 'aab')); // true
console.log(canConstruct('alarm', 'xuepmaltropma')); // true
console.log(canConstruct('words', 'geoirgjword')); // false
