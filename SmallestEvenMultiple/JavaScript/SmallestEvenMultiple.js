// Solution for: https://leetcode.com/problems/smallest-even-multiple/
const smallestEvenMultiple = (n) => {
    return n % 2 == 0 ? n : n * 2;
};
// some test cases
console.log(smallestEvenMultiple(5)); // 10
console.log(smallestEvenMultiple(6)); // 6
console.log(smallestEvenMultiple(7)); // 14
console.log(smallestEvenMultiple(8)); // 8
console.log(smallestEvenMultiple(12)); // 12
console.log(smallestEvenMultiple(13)); // 26
