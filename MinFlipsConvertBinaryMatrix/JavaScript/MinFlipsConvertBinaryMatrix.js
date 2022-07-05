// Solution for: https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/
var minFlips = function (mat) {
    var X = mat.length;
    var Y = mat[0].length;
    var binary = {
        0: 1,
        1: 2,
        2: 4,
        3: 8,
        4: 16,
        5: 32,
        6: 64,
        7: 128,
        8: 256
    };
    var mask = [];
    var state = 0;
    for (var i = 0; i < X; ++i) {
        for (var j = 0; j < Y; ++j) {
            var bit = 0;
            state += mat[i][j] * binary[Y * i + j];
            bit += binary[Y * i + j];
            if (i > 0) {
                bit += binary[Y * (i - 1) + j];
            }
            if (i < X - 1) {
                bit += binary[Y * (i + 1) + j];
            }
            if (j > 0) {
                bit += binary[Y * i + (j - 1)];
            }
            if (j < Y - 1) {
                bit += binary[Y * i + (j + 1)];
            }
            mask.push(bit);
        }
    }
    if (state === 0) {
        return 0;
    }
    var set = new Set();
    var q = [{ state: state, moves: 0 }];
    while (q.length !== 0) {
        var cur = q.shift();
        if (cur.state === 0) {
            return cur.moves;
        }
        for (var i = 0; i < X * Y; ++i) {
            var newState = cur.state;
            newState ^= mask[i];
            if (!set.has(newState)) {
                set.add(newState);
                q.push({ state: newState, moves: cur.moves + 1 });
            }
        }
    }
    return -1;
};
// some test cases
console.log(minFlips([[0, 0], [0, 1]])); // 3
console.log(minFlips([[0]])); // 0
console.log(minFlips([[1, 0, 0], [1, 0, 0]])); // -1
