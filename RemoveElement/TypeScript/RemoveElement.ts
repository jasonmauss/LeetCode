// Solution for: https://leetcode.com/problems/remove-element/
const removeElement = (nums: number[], val: number): number => {

    for(let i: number = nums.length - 1; i >= 0; i--) {
        if(nums[i] === val) {
            nums.splice(i, 1);
        }
    }

    return nums.length;
};

// some test cases
console.log(removeElement([3,2,2,3], 3)); // 2, nums = [2,2,_,_]
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // 5, nums = [0,1,4,0,3,_,_,_]