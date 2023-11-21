// Solution for: https://leetcode.com/problems/sort-by/

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number


const sortBy = (arr: JSONValue[], fn: Fn): JSONValue[] => {
	return arr.sort((a,b) => fn(a) - fn(b));
};

// some tests
let arr1 = [5, 4, 1, 2, 3], fn1 = (x) => x;
console.log(sortBy(arr1, fn1)); // [1, 2, 3, 4, 5]

let arr2 = [{"x": 1}, {"x": 0}, {"x": -1}], fn2 = (d) => d.x;
console.log(sortBy(arr2, fn2)); // [{"x": -1}, {"x": 0}, {"x": 1}]

let arr3 = [[3, 4], [5, 2], [10, 1]], fn3 = (x) => x[1];
console.log(sortBy(arr3, fn3)); // [[10, 1], [5, 2], [3, 4]]