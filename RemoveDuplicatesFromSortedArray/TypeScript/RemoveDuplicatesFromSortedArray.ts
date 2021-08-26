// Solution for: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// several ways to do this - a longer way, going left to right:
const removeDuplicates = (nums: number[]): number => {

    let valueSet: Set<number> = new Set<number>();

    for(let i: number = 0; i < nums.length; i++) {
        if(nums[i] > -999) {
            if(valueSet.has(nums[i])) {
                nums.splice(i, 1);
                nums.push(-999);
                i = i - 1;
            } else {
                valueSet.add(nums[i]);
            }
        } else {
            break;
        }
    }

    return valueSet.size;

};

// going right to left (faster)
const removeDuplicates2 = (nums: number[]): number => {

    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
        }
    }

    return nums.length;
};

// one-liner with destructuring syntax/spread operator (fastest)
// note: this requires using the --downlevelIteration option with TSC compiler command
const removeDuplicates3 = (nums: number[]): number => {
    
    return nums.splice(0, nums.length, ...(new Set(nums))).length;

};

// some test cases
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // 5, [0,1,2,3,4,_,_,_,_,_]
console.log(removeDuplicates([1,1,2])); // 2, [1,2,_]