// Solution for: https://leetcode.com/problems/frog-jump/
const canCross = (stones) => {
    // for faster lookup of positions that are know to fail for a given k
    const failTable = stones.reduce((table, stone) => {
        table[stone] = {};
        return table;
    }, {});
    // recursive frog hopper
    const explore = (position, k) => {
        // if we have reached the target position, success!
        if (position === stones[stones.length - 1]) {
            return true;
        }
        // if at this position and this k we previously failed we can stop here
        if (failTable[position][k]) {
            return false;
        }
        // try successive values of k but never < 1
        for (let i = Math.max(1, k - 1); i <= k + 1; i += 1) {
            const next = position + i;
            // if the next position is not even present in the fail table it is water and cannot be hopped to
            if (failTable[next]) {
                if (explore(next, i)) {
                    return true;
                }
            }
        }
        // we failed, so update the table for this position and value of k
        failTable[position][k] = true;
        return false;
    };
    // start from the beginning with only a initial forward hop of 1 possible
    return explore(0, 0);
};
// some test cases
console.log(canCross([0, 1, 3, 5, 6, 8, 12, 17])); // true
console.log(canCross([0, 1, 2, 3, 4, 8, 9, 11])); // false
