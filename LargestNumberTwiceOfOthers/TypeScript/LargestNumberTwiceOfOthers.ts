// Solution for: https://leetcode.com/problems/largest-number-at-least-twice-of-others/
const dominantIndex = (nums: number[]): number => {

    if(nums.length === 1) return 0;
    let largestNumber:number = Math.max(...nums);
    let result:number = nums.indexOf(largestNumber);

    for(let i:number = 0; i < nums.length; i++) {
        let num:number = nums[i];
        if((num !== largestNumber) && ((num * 2) > largestNumber)) {
            return -1;
        }
    }

    return result;
};

// some test cases
console.log(dominantIndex([3,6,1,0])); // 1
console.log(dominantIndex([1,2,3,4])); // -1
console.log(dominantIndex([1])); // 0
console.log(dominantIndex([3,6,12,24])); // 3
console.log(dominantIndex([3,6,12,23])); // -1