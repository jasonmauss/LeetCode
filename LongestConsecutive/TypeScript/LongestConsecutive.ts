// Solution for: https://leetcode.com/problems/longest-consecutive-sequence/
const longestConsecutive = (nums: number[]): number => {

    const uniqueNumberSet = new Set(nums);
    let maxConsecutiveNums = 0;

    for(let num of nums ){
        if(!uniqueNumberSet.has(num - 1)) {
            let tempNum = num;
            let currentConsecutiveRun = 0;
            while(uniqueNumberSet.has(tempNum++) ) {
                currentConsecutiveRun++;
                maxConsecutiveNums = Math.max(currentConsecutiveRun, maxConsecutiveNums)
            }
        }
    }

    return maxConsecutiveNums;

};





// some test cases
console.log(longestConsecutive([100,4,200,1,3,2])); // 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // 9
console.log(longestConsecutive([0,3,2,1,5,7,8,6,4])); // 9