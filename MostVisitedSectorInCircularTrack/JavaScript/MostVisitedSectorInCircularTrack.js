// Solution for: https://leetcode.com/problems/most-visited-sector-in-a-circular-track/
var mostVisited = function (n, rounds) {
    var startingRound = rounds[0];
    var endingRound = rounds[rounds.length - 1];
    var result = [];
    if (startingRound <= endingRound) {
        for (var i = startingRound; i <= endingRound; i++) {
            result.push(i);
        }
    }
    else {
        for (var i = 1; i <= endingRound; i++) {
            result.push(i);
        }
        for (var i = startingRound; i <= n; i++) {
            result.push(i);
        }
    }
    return result;
};
// some test cases
console.log(mostVisited(4, [1, 3, 1, 2])); //  [1,2]
console.log(mostVisited(2, [2, 1, 2, 1, 2, 1, 2, 1, 2])); //  [2]
console.log(mostVisited(7, [1, 3, 5, 7])); //  [1,2,3,4,5,6,7]
