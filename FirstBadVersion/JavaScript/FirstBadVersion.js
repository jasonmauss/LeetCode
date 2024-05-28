// Solution for: https://leetcode.com/problems/first-bad-version/description/
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
var solution = function (isBadVersion) {
    return function (n) {
        // for most optimal solution on a larger range
        // we can use binary search for this.
        var left = 1;
        var right = n;
        while (left <= right) {
            var midPoint = Math.floor((left + right) / 2);
            var isMidPointBadVersion = isBadVersion(midPoint);
            if (isMidPointBadVersion) {
                right = midPoint - 1;
            }
            else {
                left = midPoint + 1;
            }
        }
        return left;
    };
};
// some test cases
console.log(solution(5)); // 4
console.log(solution(1)); // 1
