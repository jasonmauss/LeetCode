// Solution for: https://leetcode.com/problems/determine-color-of-a-chessboard-square/
const squareIsWhite = (coordinates: string): boolean => {

    // the coordinates starting with the letter A works well since the char code
    // for a is 97. 
    return coordinates.charCodeAt(0) % 2 !== Number(coordinates[1]) % 2;

};

// some test cases
console.log(squareIsWhite('a1')); // false
console.log(squareIsWhite('h3')); // true
console.log(squareIsWhite('c7')); // false