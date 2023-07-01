// Solution for: https://leetcode.com/problems/number-of-segments-in-a-string/
const countSegments = (s) => {
    return s.split(/\s+/).filter(x => x.trim().length > 1).length;
};
// some test cases
console.log(countSegments("Hello, my name is John")); // 5
console.log(countSegments("Hello")); // 1
