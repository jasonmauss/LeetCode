// Solution for: https://leetcode.com/problems/filter-elements-from-array/description/

const filter = (arr: number[], fn: (n: number, i: number) => any): number[] => {

    const result:number[] = [];

    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }

    return result;

};







// some test cases
console.log(filter([0,10,20,30], function greaterThan10(n) { return n > 10; })); // [20, 30]
console.log(filter([1,2,3], function firstIndex(n, i) { return i === 0; })); // [1]
console.log(filter([-2, -1, 0, 1, 2], function plusOne(n) { return n + 1 })); // [-2, 0, 1, 2]