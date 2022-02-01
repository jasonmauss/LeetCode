// Solution for: https://leetcode.com/problems/k-radius-subarray-averages/
const getAverages = (nums: number[], k: number): number[] => {

    const doubleK:number = 2 * k;
    const windowSize:number = doubleK + 1;
    
    const result = [...nums].fill(-1);
    let sum:number = 0;

    for (let i:number = 0; i < nums.length; i++) {
        sum += nums[i];
        if (i >= doubleK) {
            result[i - k] = Math.floor(sum / windowSize)
            sum -= nums[i - doubleK];
        }
    }
    
    return result;

};


// some test cases
console.log(getAverages([7,4,3,9,1,8,5,2,6], 3)); // [-1,-1,-1,5,4,4,-1,-1,-1]
console.log(getAverages([100000], 0)); // [100000]
console.log(getAverages([8], 100000)); // [-1]