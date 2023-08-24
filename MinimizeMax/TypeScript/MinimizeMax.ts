// Solution for: https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/
const minimizeMax = (nums: number[], p: number): number => {

    const numsLength = nums.length;
    if (numsLength < 2 ) return 0;

    nums.sort((a, b) => a - b );

    const getPairsCount = (pairLimit: number): number => {

        let i = 0;
        let count = 0;

        while (i < numsLength - 1) {
            if (nums[i + 1] - nums[i] <= pairLimit) {
                count++;
                i += 2
            } else {
                i++;
            }
        }

        return count;
    }

    let left = 0;
    let right = nums[numsLength - 1] - nums[0];

    while (left < right) {
        const middle = (left + right) >>> 1;
        if (getPairsCount(middle) >= p) {
            right = middle;
        } else {
            left = middle + 1
        }
    }

    return left;

};



// some test cases
console.log(minimizeMax([10,1,2,7,1,3], 2)); // 1
console.log(minimizeMax([4,2,1,2], 1)); // 0