// Solution for: https://leetcode.com/problems/minimum-moves-to-convert-string/
const minimumMoves = (s: string): number => {

    if(!s.includes('X')) return 0;

    if(s.length === 3) return 1;

    let moves:number = 0;
    for(let i:number = 0; i < s.length;) {
        if(s[i] === 'X') {
            i += 3;
            moves++;
        } else {
            i++;
        }
    }

    return moves;
};


// some test cases
console.log(minimumMoves("XXX")); // 1
console.log(minimumMoves("XXOX")); // 2
console.log(minimumMoves("OOOO")); // 0
console.log(minimumMoves("OXOX")); // 1
console.log(minimumMoves("XXXOOXXX")); // 2
console.log(minimumMoves("XXOX0XX00X0XXX00X0XXXXX")); // 8