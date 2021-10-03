// Solution for: https://leetcode.com/problems/find-the-difference/
var findTheDifference = function (s, t) {
    if (s.length === 0)
        return t;
    var sArray = s.split('');
    var tArray = t.split('');
    for (var i = 0; i < tArray.length; i++) {
        if (!sArray.includes(tArray[i])) {
            return tArray[i];
        }
        else {
            var index = sArray.indexOf(t[i]);
            if (index !== -1) {
                sArray.splice(index, 1);
            }
        }
    }
    return '';
};
// some test cases
console.log(findTheDifference('abcd', 'abcde')); // 'e'
console.log(findTheDifference('', 'y')); // 'y'
console.log(findTheDifference('a', 'aa')); // 'a'
console.log(findTheDifference('ae', 'aea')); // 'a'
