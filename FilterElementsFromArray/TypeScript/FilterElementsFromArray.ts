// Solution for: https://leetcode.com/problems/filter-elements-from-array/description/

const filter = (arr: number[], fn: (n: number, i: number) => any): number[] => {

    return [0];

};







// some test cases
console.log([0,10,20,30], function greaterThan10(n) { return n > 10; }); // [20, 30]
console.log([1,2,3], function firstIndex(n, i) { return i === 0; }); // [1]
console.log([-2, -1, 0, 1, 2], function plusOne(n) { return n + 1 }); // [-2, 0, 1, 2]