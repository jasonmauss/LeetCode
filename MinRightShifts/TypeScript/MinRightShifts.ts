// Solution for: https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/

const minimumRightShifts = (nums: number[]): number => {

    const sortedNums = [...nums].sort((a, b) => a - b);
    if (JSON.stringify(nums) == JSON.stringify(sortedNums)) return 0;

    for(let i = 0; i < nums.length; i++) {
        nums.unshift(nums.pop());
        if (JSON.stringify(nums) == JSON.stringify(sortedNums)) return i + 1;
    }

    return -1;

};




// some test cases
console.log(minimumRightShifts([3,4,5,1,2])); // 2
console.log(minimumRightShifts([1,3,5])); // 0
console.log(minimumRightShifts([2,1,4])); // -1