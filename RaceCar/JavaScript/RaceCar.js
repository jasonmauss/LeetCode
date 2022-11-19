// Solution for: https://leetcode.com/problems/race-car/
const racecar = (target) => {
    let arr = [{ moves: 0, pos: 0, spd: 1 }];
    let best = Infinity;
    while (arr.length) {
        let { moves, pos, spd } = arr.pop();
        if (pos === target)
            best = Math.min(best, moves);
        if (moves >= best)
            continue;
        // Attempt to move forward
        arr.push({ moves: moves + 1, pos: pos + spd, spd: 2 * spd });
        if ((pos + spd > target && spd > 0) ||
            (pos + spd < target && spd < 0)) {
            // Reverse if we're moving in the wrong direction
            arr.push({ moves: moves + 1, pos, spd: spd > 0 ? -1 : 1 });
        }
    }
    return best;
};
// some test cases
console.log(racecar(3)); // 2
console.log(racecar(6)); // 5
