// Solution for: https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/
const countPairs = (nums: number[], k: number): number => {

    let pairCount = 0;

    for (let i = 0; i < nums.length; i++)

        for (let j = i; j < nums.length; j++) {

        if (j === i)
            continue;

        if (nums[i] === nums[j] && (i * j) % k === 0)
        pairCount++;
    }

    return pairCount;

};






// some test cases
console.log(countPairs([3,1,2,2,2,1,3], 2)); // 4
console.log(countPairs([1,2,3,4], 1)); // 0