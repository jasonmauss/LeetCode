// Solution for: https://leetcode.com/problems/valid-parentheses/

const isValid = (s: string): boolean => {

    let parenthesesChars: string[] = s.split('');
    let parenthesesStack: string[] = [];

    for(let i: number = 0; i < parenthesesChars.length; i++) {

        switch(parenthesesChars[i]) {

            case '(':
            case '[':
            case '{':
                parenthesesStack.push(parenthesesChars[i]);
                break;

            case ')':
                if (parenthesesStack.length > 0 &&
                    parenthesesStack[parenthesesStack.length - 1] === '(') {
                        parenthesesStack.pop();
                    } else {
                        parenthesesStack.push(parenthesesChars[i]);
                    }
                break;

            case ']':
                if (parenthesesStack.length > 0 &&
                    parenthesesStack[parenthesesStack.length - 1] === '[') {
                        parenthesesStack.pop();
                    } else {
                        parenthesesStack.push(parenthesesChars[i]);
                    }
                break;

            case '}':
                if (parenthesesStack.length > 0 &&
                    parenthesesStack[parenthesesStack.length - 1] === '{') {
                        parenthesesStack.pop();
                    } else {
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