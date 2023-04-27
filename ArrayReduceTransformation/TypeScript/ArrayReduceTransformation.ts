// Solution for: https://leetcode.com/problems/array-reduce-transformation/
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {

    let accumulator = init;

    for(const num of nums) {
        accumulator = fn(accumulator, num);
    }

    return accumulator;

};





// some test cases
let nums = [1,2,3,4];
let fn = function sum(accum, curr) { return accum + curr; }
let init = 0;
console.log(reduce(nums, fn, init)); // 10

nums = [1,2,3,4];
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100;
console.log(reduce(nums, fn, init)); // 130

nums = [];
fn = function sum(accum, curr) { return 0; }
init = 25;
console.log(reduce(nums, fn, init)); // 25