// Solution for: https://leetcode.com/problems/single-number/
const singleNumber = (nums: number[]): number => {

    let numbers:Set<number> = new Set();

    for(let i:number = 0; i < nums.length; i++) {
        if(!numbers.has(nums[i])) {
            numbers.add(nums[i]);
        } else {
            numbers.delete(nums[i]);
        }
    }

    return numbers.values().next().value;

};

// some test cases
console.log(singleNumber([2,2,1])); // 1
console.log(singleNumber([4,1,2,1,2])); // 4
console.log(singleNumber([1])); // 1