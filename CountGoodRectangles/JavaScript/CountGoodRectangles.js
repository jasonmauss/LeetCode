// Solution for: https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/
const countGoodRectangles = (rectangles) => {
    const largestSquares = [];
    let rectangleCount = 0;
    for (let [length, width] of rectangles) {
        largestSquares.push(Math.min(length, width));
    }
    let maxRect = Math.max(...largestSquares);
    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    rectangleCount = countOccurrences(largestSquares, maxRect);
    return rectangleCount;
};
// some test cases
console.log(countGoodRectangles([[5, 8], [3, 9], [5, 12], [16, 5]])); // 3
console.log(countGoodRectangles([[2, 3], [3, 7], [4, 3], [3, 7]])); // 3
