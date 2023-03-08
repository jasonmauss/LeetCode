// Solution for: https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
const maxDepth = (s) => {
    let depth = 0;
    let maxDepth = 0;
    for (let char of s) {
        if (char === '(') {
            depth++;
            maxDepth = Math.max(depth, maxDepth);
        }
        if (char === ')') {
            depth--;
        }
    }
    return maxDepth;
};
// some test cases
console.log(maxDepth('(1+(2*3)+((8)/4))+1')); // 3
console.log(maxDepth('(1)+((2))+(((3)))')); // 3
