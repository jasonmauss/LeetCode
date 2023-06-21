// Solution for: https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/
const canBeIncreasing = (nums: number[]): boolean => {

    let prevNum = 0;
    let numHasBeenRemoved = false;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > prevNum) {
            prevNum = nums[i];
        } else {
            if(numHasBeenRemoved) return false;

            if(i == nums.length - 1) return true;

            if(nums[i + 1] > prevNum) {
                nums.splice(i, 1);
            } else {
                nums.splice(i - 1, 1);
            }
            i = -1;
            prevNum = 0;
            numHasBeenRemoved = true;
        }
    }

    return true;

};







// some test cases
console.log(canBeIncreasing([1,2,10,5,7])); //  true
console.log(canBeIncreasing([2,3,1,2])); //  false
console.log(canBeIncreasing([1,1,1])); //  false
console.log(canBeIncreasing([105,924,32,968])); // true
console.log(canBeIncreasing([512,867,904,997,403])); // true