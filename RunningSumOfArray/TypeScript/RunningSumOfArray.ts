// Solution for: https://leetcode.com/problems/running-sum-of-1d-array/
const runningSum = (nums: number[]): number[] => {

    let result:number[] = [];
    result.push(nums[0]);
    
    const reducer = (previousValue:number, currentValue:number) => {
        result.push(previousValue + currentValue);
        return previousValue + currentValue;
    }

    nums.reduce(reducer);
    return result;
};


// some test cases
console.log(runningSum([1,2,3,4])); // [1,3,6,10]
console.log(runningSum([1,1,1,1,1])); // [1,2,3,4,5]
console.log(runningSum([3,1,2,10,1])); // [3,4,6,16,17]