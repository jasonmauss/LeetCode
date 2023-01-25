// Solution for: https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/
const differenceOfSum = (nums) => {
    if (nums.length === 1)
        return 0;
    let numericSum = 0;
    let digitSum = 0;
    for (let num of nums) {
        numericSum += num;
        if (num < 10) {
            digitSum += num;
        }
        else {
            for (let char of num.toString().split('')) {
                digitSum += Number(char);
            }
        }
    }
    return Math.abs(numericSum - digitSum);
};
// some test cases
console.log(differenceOfSum([1, 15, 6, 3])); // 9
console.log(differenceOfSum([1, 2, 3, 4])); // 0
console.log(differenceOfSum([42, 661, 377, 14])); // 1053
