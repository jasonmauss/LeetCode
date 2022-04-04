// Solution for: https://leetcode.com/problems/subarray-sum-equals-k/
const subarraySum = (nums: number[], k: number): number => {

    const map = new Map([[0, 1]]);
    let sum = 0;
    let total = 0;
    
    for (let num of nums) {
        sum = sum + num;
        total += (map.get(sum - k) || 0);
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return total;

};



// some test cases
console.log(subarraySum([1,1,1], 2)); // 2
console.log(subarraySum([1,2,3], 3)); // 2