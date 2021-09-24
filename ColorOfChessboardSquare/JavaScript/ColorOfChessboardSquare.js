// Solution for: https://leetcode.com/problems/determine-color-of-a-chessboard-square/
function squareIsWhite(coordinates) {
    return coordinates.charCodeAt(0) % 2 !== Number(coordinates[1]) % 2;
}
;
// some test cases
console.log(squareIsWhite('a1')); // false
console.log(squareIsWhite('h3')); // true
console.log(squareIsWhite('c7')); // false
