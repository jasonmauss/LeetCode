// Solution for: https://leetcode.com/problems/valid-parentheses/
var isValid = function (s) {
    var parenthesesChars = s.split('');
    var parenthesesStack = [];
    for (var i = 0; i < parenthesesChars.length; i++) {
        switch (parenthesesChars[i]) {
            case '(':
            case '[':
            case '{':
                parenthesesStack.push(parenthesesChars[i]);
                break;
            case ')':
                if (parenthesesStack.length > 0 &&
                    parenthesesStack[parenthesesStack.length - 1] === '(') {
                    parenthesesStack.pop();
                }
                else {
                    parenthesesStack.push(parenthesesChars[i]);
                }
                break;
            case ']':
                if (parenthesesStack.length > 0 &&
                    parenthesesStack[parenthesesStack.length - 1] === '[') {
                    parenthesesStack.pop();
                }
                else {
                    parenthesesStack.push(parenthesesChars[i]);
                }
                break;
            case '}':
                if (parenthesesStack.length > 0 &&
                    parenthesesStack[parenthesesStack.length - 1] === '{') {
                    parenthesesStack.pop();
                }
                else {
                    parenthesesStack.push(parenthesesChars[i]);
                }
                break;
        }
    }
    return parenthesesStack.length === 0;
};
// some test cases
console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('([')); // false
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true
console.log(isValid(']')); // false
