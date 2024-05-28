// Solution for: https://leetcode.com/problems/first-bad-version/description/

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        
        // for most optimal solution on a larger range
        // we can use binary search for this.
        let left = 1;
        let right = n;

        while(left <= right) {
            const midPoint = Math.floor((left + right) / 2);

            const isMidPointBadVersion = isBadVersion(midPoint);

            if(isMidPointBadVersion) {
                right = midPoint - 1;
            } else {
                left = midPoint + 1;
            }
        }

        return left;

    };
};




// some test cases
console.log(solution(5)); // 4
console.log(solution(1)); // 1