// Solution for: https://leetcode.com/problems/remove-outermost-parentheses/
const removeOuterParentheses = (s) => {
    let parentheseCount = 0;
    let result = '';
    for (let counter = 0; counter < s.length; counter++) {
        const currentChar = s.charAt(counter);
        if (currentChar === '(' && parentheseCount++ > 0)
            result += currentChar;
        if (currentChar === ')' && parentheseCount-- > 1)
            result += currentChar;
    }
    return result;
};
// some test cases
console.log(removeOuterParentheses('(()())(())')); // "()()()"
console.log(removeOuterParentheses('(()())(())(()(()))')); // "()()()()(())"
console.log(removeOuterParentheses('()()')); // ""
