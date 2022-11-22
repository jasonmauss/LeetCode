// Solution for: https://leetcode.com/problems/maximum-gap/
const maximumGap = (nums) => {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    let bucketNum = nums.length;
    let bucketSize = (max - min) / (bucketNum - 1);
    let bucketMax = new Array(bucketNum).fill(-Infinity);
    let bucketMin = new Array(bucketNum).fill(Infinity);
    for (let i = 0; i < bucketNum; ++i) {
        let index = Math.floor((nums[i] - min) / bucketSize);
        bucketMax[index] = Math.max(bucketMax[index], nums[i]);
        bucketMin[index] = Math.min(bucketMin[index], nums[i]);
    }
    let preMax = min;
    let result = 0;
    for (let i = 0; i < bucketNum; ++i) {
        if (bucketMax[i] === -Infinity || bucketMin[i] === Infinity)
            continue;
        result = Math.max(result, bucketMin[i] - preMax);
        preMax = bucketMax[i];
    }
    return result;
};
// some test cases
console.log(maximumGap([3, 6, 9, 1])); // 3
console.log(maximumGap([10])); // 0
