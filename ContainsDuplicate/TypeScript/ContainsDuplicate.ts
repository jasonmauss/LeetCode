// Solution for: https://leetcode.com/problems/contains-duplicate/
const containsDuplicate = (nums: number[]): boolean => {

    let numberSet:Set<number> = new Set<number>();

    for(let i:number = 0; i < nums.length; i++) {
        if(numberSet.has(nums[i])) {
            return true;
        } else {
            numberSet.add(nums[i]);
        }
    }

    return false;
};


// some test cases
console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true