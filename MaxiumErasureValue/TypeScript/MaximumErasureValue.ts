// Solution for: https://leetcode.com/problems/maximum-erasure-value/

const maximumUniqueSubarray = (nums: number[]): number => {

    const valueMap: Map<number, number> = new Map<number, number>();
    let left = 0;
    let total = 0;
    let maxValue = 0;

    for(let i:number = 0; i < nums.length; i++) {
        total += nums[i];
        valueMap.set(nums[i], valueMap.get(nums[i]) + 1 || 1)
        while(valueMap.has(nums[i]) && valueMap.get(nums[i]) > 1) {
            let firstValue = nums[left];
            valueMap.set(firstValue, valueMap.get(firstValue) - 1);
            total -= firstValue;
            if(valueMap.get(firstValue) === 0) valueMap.delete(firstValue);
            left++;
        }
        maxValue = Math.max(maxValue, total);
    }

    return maxValue;

};

// some test cases
console.log(maximumUniqueSubarray([4,2,4,5,6])); // 17
console.log(maximumUniqueSubarray([5,2,1,2,5,2,1,2,5])); // 8
console.log(maximumUniqueSubarray([5,2,1,3,5,3,1,2,5])); // 11
console.log(maximumUniqueSubarray([187,470,25,436,538,809,441,167,477,110,275,133,
                                    666,345,411,459,490,266,987,965,429,166,809,340,
                                    467,318,125,165,809,610,31,585,970,306,42,189,169,
                                    743,78,810,70,382,367,490,787,670,476,278,775,673,
                                    299,19,893,817,971,458,409,886,434])); // 16911