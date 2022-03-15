// Solution for: https://leetcode.com/problems/contiguous-array/
function findMaxLength(nums: number[]): number {

    let max:number = 0;
    let count = {};
    let discrepency:number = 0;
    let ind:number = 0;

    if(!Array.isArray(nums)) return;

    while(ind < nums.length){
        discrepency += (nums[ind] == 1 ? 1 : -1);
        if(discrepency === 0) max = Math.max(max, ind + 1);
        else if(discrepency in count)
            max = Math.max(max, ind - count[discrepency]);
        else
            count[discrepency] = ind;
        ind ++;
    }
    
    return max;

};



// some test cases
console.log(findMaxLength([0,1])); // 2
console.log(findMaxLength([0,1,0])); // 2