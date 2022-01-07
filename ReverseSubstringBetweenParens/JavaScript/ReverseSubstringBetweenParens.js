// Solution for: https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/
var reverseParentheses = function (s) {
    var result = '';
    if (s.indexOf('(') === -1)
        return s.split('').reverse().join('');
    var getOpeningBracketPos = function (closingBracketPos, stringValue) {
        for (var i = closingBracketPos; i >= 0; i--) {
            if (stringValue.substring(i, i + 1) === '(') {
                return i;
            }
        }
        return -1;
    };
    while (s.indexOf('(') > -1) {
        var closingBracketPos = s.indexOf(')');
        if (closingBracketPos > -1) {
            var openingBracketPos = getOpeningBracketPos(closingBracketPos, s);
            if (openingBracketPos > -1) {
                var stringToReverse = s.substring(openingBracketPos + 1, closingBracketPos);
                stringToReverse = stringToReverse.split('').reverse().join('');
                s = s.substring(0, openingBracketPos) +
                    stringToReverse +
                    s.substring(closingBracketPos + 1);
                result = s;
            }
            else {
                var stringToReverse = s.substring(openingBracketPos + 1, closingBracketPos);
                return stringToReverse.split('').reverse().join('');
            }
        }
    }
    return result;
};
// some test cases
console.log(reverseParentheses("(abcd)")); // "dcba"
console.log(reverseParentheses("(u(love)i)")); // "iloveu"
console.log(reverseParentheses("(ed(et(oc))el)")); // "leetcode"
