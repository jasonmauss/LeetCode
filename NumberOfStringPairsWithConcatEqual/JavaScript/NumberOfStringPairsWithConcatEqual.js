// Solution for: https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/
const numOfPairs = (nums, target) => {
    let count = 0;
    let i = 0;
    while (i < nums.length) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                count++;
                if (i === j) {
                    count -= 1;
                }
            }
        }
        i++;
    }
    return count;
};
// some test cases
console.log(numOfPairs(["777", "7", "77", "77"], '7777')); // 4
console.log(numOfPairs(["123", "4", "12", "34"], '1234')); // 2
console.log(numOfPairs(["1", "1", "1"], '11')); // 6
