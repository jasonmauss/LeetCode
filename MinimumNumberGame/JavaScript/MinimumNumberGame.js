// Solution for: https://leetcode.com/problems/minimum-number-game/
const numberGame = (nums) => {
    const returnArray = [];
    nums.sort((a, b) => a - b);
    while (nums.length > 0) {
        const temp = nums.shift();
        returnArray.push(nums.shift());
        returnArray.push(temp);
    }
    return returnArray;
};
// some tests
console.log(numberGame([5, 4, 2, 3])); // [3,2,5,4]
console.log(numberGame([2, 5])); // [5,2]
