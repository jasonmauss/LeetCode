// Solution for: https://leetcode.com/problems/distribute-candies
var distributeCandies = function (candyType) {
    var uniqueCandies = new Set(candyType);
    return Math.min(new Set(candyType).size, (candyType.length / 2));
};
// some test cases
console.log(distributeCandies([1, 1, 2, 2, 3, 3])); // 3
console.log(distributeCandies([1, 1, 2, 3])); // 2
console.log(distributeCandies([6, 6, 6, 6])); // 1
