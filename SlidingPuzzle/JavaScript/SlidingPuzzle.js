// Solution for: https://leetcode.com/problems/sliding-puzzle/
var slidingPuzzle = function (board) {
    // movesMap is basically a hashtable of possible moves that can be made
    // based on where the 0 puzzle piece is for example if the pieces were laid
    // out like this:
    // 0 1 2 
    // 3 4 5
    // we know we can swap the first piece (which is at index 0) with only 
    // indices 1 and 3 in the original board
    var movesMap = {
        0: [1, 3],
        1: [0, 2, 4],
        2: [1, 5],
        3: [0, 4],
        4: [1, 3, 5],
        5: [2, 4]
    };
    // a simple function to swap values, it's easier to convert a string to an array then swap
    var swap = function (state, pos, next) {
        var _a;
        var array = state.split('');
        _a = [array[next], array[pos]], array[pos] = _a[0], array[next] = _a[1];
        return array.join('');
    };
    // convert board to string of numbers e.g. '123540'
    var state = '';
    board.forEach(function (row) { return state += row.join(''); });
    var visited = new Set(state);
    // a queue to keep track for state, position of 0 and moves so far
    var q = [[state, state.indexOf('0'), 0]];
    while (q.length) {
        var _a = q.shift(), state_1 = _a[0], pos = _a[1], moves = _a[2];
        if (state_1 == '123450')
            return Number(moves);
        // move 0 to each possible direction (next) in movesMap 
        for (var _i = 0, _b = movesMap[pos]; _i < _b.length; _i++) {
            var next = _b[_i];
            var newState = swap(state_1, pos, next);
            if (visited.has(newState))
                continue;
            visited.add(newState);
            q.push([newState, next, Number(moves) + 1]);
        }
    }
    return -1;
};
// some test cases
console.log(slidingPuzzle([[1, 2, 3], [4, 0, 5]])); // 1
console.log(slidingPuzzle([[1, 2, 3], [5, 4, 0]])); // -1
console.log(slidingPuzzle([[4, 1, 2], [5, 0, 3]])); // 5
