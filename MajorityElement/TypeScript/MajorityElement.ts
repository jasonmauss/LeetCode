import { count } from "console";

// Solution for: https://leetcode.com/problems/majority-element/
const majorityElement = (nums: number[]): number => {

    let majorityNumber:number = 0;
    let countMap: Map<number, number> = new Map();
    countMap.set(0, 0);

    for(let i:number = 0; i< nums.length; i++) {
        if(!countMap.has(nums[i])) {
            countMap.set(nums[i], 1);
        } else {
            countMap.set(nums[i], countMap.get(nums[i]) + 1);
        }
        if(countMap.get(nums[i]) > countMap.get(majorityNumber)) {
            majorityNumber = nums[i];
        }
    }

    return majorityNumber;
};

// some test cases
console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2
console.log(majorityElement([6,5,5])); // 5
console.log(majorityElement([6,6,6,7,7])); // 6