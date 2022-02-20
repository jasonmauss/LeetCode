// Solution for: https://leetcode.com/problems/maximum-product-subarray/
const maxProduct = (nums: number[]): number => {

    let result = nums[0];

    for(let i:number = 1, maxNum:number = result, minNum:number = result; i < nums.length; i++) {
        if(nums[i] < 0) {
            let tempMin:number = minNum;
            minNum = maxNum;
            maxNum = tempMin;
        }
        maxNum = Math.max(nums[i], maxNum * nums[i]);
        minNum = Math.min(nums[i], minNum * nums[i]);

        result = Math.max(result, maxNum);
    }

    return result;

};


// some test cases
console.log(maxProduct([2,3,-2,4])); // 6
console.log(maxProduct([-2,0,-1])); // 0