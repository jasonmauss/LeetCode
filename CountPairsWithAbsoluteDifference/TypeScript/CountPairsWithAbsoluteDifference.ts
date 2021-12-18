// Solution for: https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
const countKDifference = (nums: number[], k: number): number => {

    let pairs:number = 0;

    for(let i:number = 0; i < nums.length; i++) {
        const curNumber1:number = nums[i];
        for(let j:number = i + 1; j < nums.length; j++) {
            const curNumber2:number  = nums[j];
            if(Math.abs(Math.abs(curNumber1) - Math.abs(curNumber2)) === k) pairs++;
        }
    }

    return pairs;

};

// some test cases
console.log(countKDifference([1,2,2,1], 1)); // 4
console.log(countKDifference([1,3], 3)); // 0
console.log(countKDifference([3,2,1,5,4], 2)); // 3