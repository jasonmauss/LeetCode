// Solution for: https://leetcode.com/problems/shuffle-the-array/
const shuffle = (nums: number[], n: number): number[] => {

    let answer:number[] = [];

    for(let i = 0; i < n; i++) {
        answer.push(...[nums[i], nums[i + n]]);
    }

    return answer;

};




// some test cases
console.log(shuffle([2,5,1,3,4,7], 3)); // [2,3,5,4,1,7]
console.log(shuffle([1,2,3,4,4,3,2,1], 4)); // [1,4,2,3,3,2,4,1]
console.log(shuffle([1,1,2,2], 2)); // [1,2,1,2]