// Solution for: https://leetcode.com/problems/contains-duplicate-ii/description/
const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
    
    const existingNums = new Set<number>();
    
    for (let i = 0; i < nums.length; i++) {
        if (existingNums.has(nums[i])) return true;
        existingNums.add(nums[i]);
        if (existingNums.size > k) existingNums.delete(nums[i - k]);
    }

    return false;

};




// some test cases
console.log(containsNearbyDuplicate([1,2,3,1], 3)); // true
console.log(containsNearbyDuplicate([1,0,1,1], 1)); // true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); // false