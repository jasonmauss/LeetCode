// Solution for: https://leetcode.com/problems/find-center-of-star-graph/
const findCenter = (edges) => {
    let firstVal = edges[0][0];
    let secondVal = edges[0][1];
    if (edges[1].find((num => num === firstVal))) {
        return firstVal;
    }
    else {
        return secondVal;
    }
};
// some test cass
console.log(findCenter([[1, 2], [2, 3], [4, 2]])); // 2
console.log(findCenter([[1, 2], [5, 1], [1, 3], [1, 4]])); // 1
