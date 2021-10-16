// Solution for: https://leetcode.com/problems/make-the-string-great/
const makeGood = (s: string): string => {

    const charStack: string[] = [];

    let i = 0;

    const stringIsBad = (charString1: string, charString2: string) => {
        return Math.abs(charString1.charCodeAt(0) - charString2.charCodeAt(0)) === 32;
    };

    while (i < s.length) {

        charStack.push(s.charAt(i));

        while (charStack.length > 1 && stringIsBad(charStack[charStack.length - 2], charStack[charStack.length - 1])) {
            charStack.pop();
            charStack.pop();
        }

        i++;
    }

  return charStack.join('');
};


// some test cases
console.log(makeGood('leEeetcode')); // leetcode
console.log(makeGood('abBAcC')); // ''
console.log(makeGood('s')); // s
