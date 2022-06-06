// Solution for: https://leetcode.com/problems/number-of-visible-people-in-a-queue/
const canSeePersonsCount = (heights) => {
    const length = heights.length;
    const result = new Array(length).fill(0);
    let stack = new Array();
    for (let i = 0; i < length; i++) {
        while (stack.length && heights[i] > heights[stack.at(-1)]) {
            const index = stack.pop();
            result[index]++;
        }
        if (stack.length)
            result[stack.at(-1)]++;
        stack.push(i);
    }
    return result;
};
// some test cases
console.log(canSeePersonsCount([10, 6, 8, 5, 11, 9])); // [3,1,2,1,1,0]
console.log(canSeePersonsCount([5, 1, 2, 3, 10])); // [4,1,1,1,0]
