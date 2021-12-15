// Solution for: https://leetcode.com/problems/shuffle-string/
var restoreString2 = function (s, indices) {
    var stringMap = new Map();
    for (var i = 0; i < s.length; i++) {
        stringMap.set(indices[i], s[i]);
    }
    var resultString = '';
    for (var i = 0; i < s.length; i++) {
        resultString += stringMap.get(i);
    }
    return resultString;
};
var restoreString = function (s, indices) {
    var length = s.length;
    var chars = new Array(length);
    for (var i = 0; i < length; i++) {
        chars[indices[i]] = s[i];
    }
    return chars.join('');
};
// there are lots of different ways to do this one
// call whichever function you want in the test cases
// some test cases
console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])); // "leetcode"
console.log(restoreString("abc", [0, 1, 2])); // "abc"
console.log(restoreString("aiohn", [3, 1, 4, 2, 0])); // "nihao"
console.log(restoreString("aaiougrt", [4, 0, 2, 6, 7, 3, 1, 5])); // "arigatou"
console.log(restoreString("art", [1, 0, 2])); // "rat"
