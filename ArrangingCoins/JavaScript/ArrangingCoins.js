// Solution for: https://leetcode.com/problems/arranging-coins/
function arrangeCoins(n) {
    var completeRows = 0;
    for (var i = 1; i <= n; i++) {
        if (n - i >= 0) {
            completeRows++;
        }
        n = n - i;
    }
    return completeRows;
}
;
// some test cases
console.log(arrangeCoins(1)); // 1
console.log(arrangeCoins(5)); // 2
console.log(arrangeCoins(8)); // 3
console.log(arrangeCoins(11)); // 4
console.log(arrangeCoins(16)); // 5
console.log(arrangeCoins(18)); // 5
