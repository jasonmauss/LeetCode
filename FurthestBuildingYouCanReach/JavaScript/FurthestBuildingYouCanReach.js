// Solution for: https://leetcode.com/problems/furthest-building-you-can-reach/
const furthestBuilding = (heights, bricks, ladders) => {
    const diffs = [];
    for (let i = 0; i < heights.length - 1; i++) {
        // check if bricks or ladders are needed
        const diff = heights[i + 1] - heights[i];
        // go to next building
        if (diff <= 0) {
            continue;
        }
        // add diff
        diffs.push(diff);
        // use ladders if there are ladders left
        if (diffs.length <= ladders) {
            continue;
        }
        // try to use bricks
        const minDiff = Math.min(...diffs);
        diffs.splice(diffs.indexOf(minDiff), 1);
        if (bricks < minDiff) {
            return i;
        }
        bricks -= minDiff;
    }
    return heights.length - 1;
};
// some test cases
console.log(furthestBuilding([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2)); // 7
console.log(furthestBuilding([14, 3, 19, 3], 17, 0)); // 3
