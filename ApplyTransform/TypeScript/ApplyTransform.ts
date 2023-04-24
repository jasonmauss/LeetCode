// Solution for: https://leetcode.com/problems/apply-transform-over-each-element-in-array/
const map = (arr: number[], fn: (n: number, i: number) => number): number[] => {

    const returnValues = [];

    for(let i = 0; i < arr.length; i++) {
        returnValues.push(fn(arr[i], i));
    }

    return returnValues;

};





// some test cases
console.log(map([1,2,3], function plusone(n) { return n + 1; })); // [2,3,4]
console.log(map([1,2,3], function plusI(n, i) { return n + i; })); // [1,3,5]
console.log(map([10,20,30], function constant() { return 42; })); // [42,42,42]