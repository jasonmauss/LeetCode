// Solution for: https://leetcode.com/problems/first-missing-positive/
const firstMissingPositive = (nums: number[]): number => {
    
    if(nums.length === 0) return 1;
    if(Math.max(...nums) < 1) return 1;
    
    const maxValue = Math.max(...nums);
    const valueSet:Set<number> = new Set<number>(nums);

    for(let i:number = 1; i < maxValue; i++) {
        if(!valueSet.has(i)) return i;
    }

    return maxValue + 1;
};


// some test cases
console.log(firstMissingPositive([1,2,0])); // 3
console.log(firstMissingPositive([3,4,-1,1])); // 2
console.log(firstMissingPositive([7,8,9,11,12])); // 1
console.log(firstMissingPositive([1,2,3,4,5,6,7,8,9,10,11,12])); // 13