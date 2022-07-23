// Solution for: https://leetcode.com/problems/stone-game-iv/
var winnerSquareGame = function (n) {
    var memo = new Array(n + 1);
    var canWinGame = function (stones) {
        if (stones == 0)
            return false;
        if (memo[stones] != null) {
            return memo[stones];
        }
        for (var i = 1; i * i <= stones; i++) {
            if (!canWinGame(stones - i * i))
                return memo[stones] = true;
        }
        return memo[stones] = false;
    };
    return canWinGame(n);
};
// some test cases
console.log(winnerSquareGame(1)); // true
console.log(winnerSquareGame(2)); // false
console.log(winnerSquareGame(4)); // true
