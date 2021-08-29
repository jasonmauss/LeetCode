// Solution for: https://leetcode.com/problems/longest-valid-parentheses/

const longestValidParentheses = (s: string): number => {

    if(s.length < 2) {
        return 0;
    }

    let openingParens: number = 0;
    let closingParens: number = 0;
    let longestLength: number = 0;

    // This approach compares opening and closing parens pairs
    // first from the beginning to the end of the string, and then
    // again from the end to beginning to account for cases where
    // there are "lopsided" opening/closing parens that don't allow
    // for counting a matching closing paren with an opening paren.
    for(let i: number = 0; i < s.length; i++) {
        if(s[i] === '(') {
            openingParens++;
        } else {
            closingParens++;
        }
        if(openingParens === closingParens) {
            longestLength = Math.max(longestLength, closingParens * 2);
        } else if (closingParens >= openingParens) {
            openingParens = closingParens = 0;
        }
    }

    openingParens = closingParens = 0;

    for(let i: number = s.length - 1; i >= 0; i--) {
        if(s[i] === '(') {
            openingParens++;
        } else {
            closingParens++;
        }
        if(openingParens === closingParens) {
            longestLength = Math.max(longestLength, openingParens * 2)
        } else if (openingParens >= closingParens) {
            openingParens = closingParens = 0;
        }
    }

    return longestLength;
};

// some test cases
console.log(longestValidParentheses('(()')); // 2 - longest valid parentheses is "()"
console.log(longestValidParentheses(')()())')); // 4 - longest valid parentheses is "()()"
console.log(longestValidParentheses('')); // 0 - no valid parentheses
console.log(longestValidParentheses('(((((')); // 0 - no valid parentheses
console.log(longestValidParentheses('(()(((')); // 2 - longest valid parentheses is "()"
console.log(longestValidParentheses('(()())(')); // 6 - longest valid parentheses is "(()())"
console.log(longestValidParentheses('(()()))')); // 6 - longest valid parentheses is "(()())"
console.log(longestValidParentheses('()(()')); // 2 - longest valid parentheses is "()"