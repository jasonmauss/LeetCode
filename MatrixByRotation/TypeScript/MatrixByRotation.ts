// Solution for: https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/
const findRotation = (mat: number[][], target: number[][]): boolean => {

    // perform 4 rotations, if rotation result ever matches JSON string of target, return true
    for (let i = 0; i < 4; i++)
        if (JSON.stringify(mat = rotate(mat)) === JSON.stringify(target)) return true;

    return false;

};

const rotate = (mat: number[][]): number[][] => mat.map((row, index) => row.map((_, j) => mat[mat.length - 1 - j][index]));

// some test cases
console.log(findRotation([[0,1],[1,0]], [[1,0],[0,1]])); // true
console.log(findRotation([[0,1],[1,1]], [[1,0],[0,1]])); // false
console.log(findRotation([[0,0,0],[0,1,0],[1,1,1]], [[1,1,1],[0,1,0],[0,0,0]])); // true