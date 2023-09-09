// Solution for: https://leetcode.com/problems/furthest-point-from-origin/
const furthestDistanceFromOrigin = (moves) => {
    let left = 0, right = 0, totalMoves = moves.length;
    for (let i = 0; i < totalMoves; i++) {
        if (moves[i] === "L") {
            left++;
            continue;
        }
        if (moves[i] === "R") {
            right++;
            continue;
        }
    }
    totalMoves = totalMoves - (right + left);
    let subtotal = Math.abs(right - left);
    return totalMoves + subtotal;
};
// some test cases
console.log(furthestDistanceFromOrigin("L_RL__R")); // 3
console.log(furthestDistanceFromOrigin("_R__LL_")); // 5
console.log(furthestDistanceFromOrigin("_______")); // 7
