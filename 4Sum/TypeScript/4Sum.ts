// Solution for: https://leetcode.com/problems/4sum/
const fourSum = (nums: number[], target: number): number[][] => {

    const numsMap = new Map<number, number>();
    const reducedNums: number[] = [];

    // For this problem, there shouldn't ever be a solution where
    // we need more than 4 instances of any number so reduce the
    // list of numbers down to no more than 4 of any single number
    for(let i = 0; i < nums.length; i++) {
        const currentNumCount = numsMap.get(nums[i]) || 0;
        if(currentNumCount < 4) {
            reducedNums.push(nums[i]);
            numsMap.set(nums[i], currentNumCount + 1);
        }
    }

    // sort the values
    reducedNums.sort((a, b) => a - b);
    const numsLength = reducedNums.length;

    let fourSumMap = new Map<string, number[]>();

    for (let i = 0; i < numsLength; i++) {
        for (let j = i+1; j < numsLength; j++) {
            for (let k = j+1; k < numsLength; k++) {
                for (let l = k+1; l < numsLength; l++) {
                    const sum = reducedNums[i] + reducedNums[j] + reducedNums[k] + reducedNums[l];
                    if (sum == target) {
                        const item = [reducedNums[i], reducedNums[j], reducedNums[k], reducedNums[l]].sort((a,b) => a - b);
                        const key = item.toString();
                        if (!fourSumMap.has(key)) fourSumMap.set(key, item);
                    }
                    if (sum >= target) l = numsLength;
                }
            }
        }
    }

    return [...fourSumMap.values()];
};








// some test cases
console.log(fourSum([1,0,-1,0,-2,2], 0)); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2,2,2,2,2], 8)); // [[2,2,2,2]]