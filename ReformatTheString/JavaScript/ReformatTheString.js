// Solution for: https://leetcode.com/problems/reformat-the-string/
var reformat = function (s) {
    var numsOnly = s.replace(/[^\d]/g, '').split('');
    var charsOnly = s.replace(/[0-9]/g, '').split('');
    if ((numsOnly.length === 0 && charsOnly.length > 1) || (charsOnly.length === 0 && numsOnly.length > 1))
        return '';
    if (Math.max(numsOnly.length, charsOnly.length) - Math.min(numsOnly.length, charsOnly.length) > 1)
        return '';
    var returnVal = '';
    var startArray = [];
    var finishArray = [];
    if (numsOnly.length === charsOnly.length) {
        startArray = numsOnly;
        finishArray = charsOnly;
    }
    if (charsOnly.length > numsOnly.length) {
        returnVal += charsOnly.shift();
        startArray = numsOnly;
        finishArray = charsOnly;
    }
    if (numsOnly.length > charsOnly.length) {
        returnVal += numsOnly.shift();
        startArray = charsOnly;
        finishArray = numsOnly;
    }
    for (var i = 0; i < startArray.length; i++) {
        returnVal += startArray[i];
        returnVal += finishArray[i];
    }
    return returnVal;
};
// some test cases
console.log(reformat("a0b1c2")); // "0a1b2c"
console.log(reformat("leetcode")); // ""
console.log(reformat("1229857369")); // "1229857369"
console.log(reformat("covid2019")); // "c2o0v1i9d"
console.log(reformat("ab123")); // "1a2b3"
console.log(reformat("j")); // "j"
console.log(reformat("4")); // "4"
