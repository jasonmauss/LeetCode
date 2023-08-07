// Solution for: https://leetcode.com/problems/minimum-size-subarray-sum/
const minSubArrayLen = (target: number, nums: number[]): number => {

    let minimumSubArrayLength = Infinity;
    let slidingWindowSum = 0;
    
    for(let slidingWindowEnd = 0, slidingWindowStart = 0; slidingWindowEnd < nums.length; slidingWindowEnd++) {
        
        slidingWindowSum += nums[slidingWindowEnd];

        while(slidingWindowSum >= target) {
            minimumSubArrayLength = Math.min(minimumSubArrayLength, slidingWindowEnd - slidingWindowStart + 1);
            slidingWindowSum -= nums[slidingWindowStart];
            slidingWindowStart++;
        }
    }

    return minimumSubArrayLength === Infinity ? 0 : minimumSubArrayLength;

};

// some test cases
console.log(minSubArrayLen(7, [2,3,1,2,4,3])); //  2
console.log(minSubArrayLen(4, [1,4,4])); //  1
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1])); //  0