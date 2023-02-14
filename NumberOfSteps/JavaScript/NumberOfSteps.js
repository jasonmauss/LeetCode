// Solution for: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
const numberOfSteps = (num) => {
    let steps = 0;
    while (num > 0) {
        num = num % 2 == 0 ? num / 2 : num - 1;
        steps++;
    }
    return steps;
};
// some test cases
console.log(numberOfSteps(14)); // 6
console.log(numberOfSteps(8)); // 4
console.log(numberOfSteps(123)); // 12
