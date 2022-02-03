// Solution for: https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/
var numberOfWeeks = function (milestones) {
    var sum = 0;
    var biggest = 0;
    for (var i = 0; i < milestones.length; i++) {
        sum += milestones[i];
        biggest = Math.max(biggest, milestones[i]);
    }
    var remaining = sum - biggest;
    if (remaining >= biggest)
        return sum;
    return remaining * 2 + 1;
};
// some test cases
console.log(numberOfWeeks([1, 2, 3])); // 6
console.log(numberOfWeeks([5, 2, 1])); // 7
