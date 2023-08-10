// Solution for: https://leetcode.com/problems/climbing-stairs/
const climbStairs = (n: number): number => {

    // seed with 5 values
    const stairClimbingSequence = [1, 2, 3, 5, 8, 13];

    while(stairClimbingSequence.length  < n) {
        stairClimbingSequence.push(
            stairClimbingSequence[stairClimbingSequence.length - 1] +
            stairClimbingSequence[stairClimbingSequence.length - 2]
        )
    }

    return stairClimbingSequence[n - 1];
};






// some test cases
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(5)); // 8
console.log(climbStairs(7)); // 21