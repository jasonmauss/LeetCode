// Solution for: https://leetcode.com/problems/01-matrix/
const updateMatrix = (mat: number[][]): number[][] => {

    const rows = mat.length;
    const cols = mat[0].length;

    const returnMatrix = [];

    for(let i = 0; i < rows; i++) {
        returnMatrix[i] = [];
        for(let j = 0; j < cols; j++) {
            if(mat[i][j] === 0) {
                returnMatrix[i][j] = 0;
            } else {
                let minValue = Infinity;
                for(let k = 0; k < rows; k++) {
                    for(let l = 0; l < cols; l++) {
                        if(mat[k][l] === 0) {
                            minValue = Math.min(minValue, Math.abs(k - i) + Math.abs(l - j));
                        }
                    }
                }
                returnMatrix[i][j] = minValue;
            }
        }
    }

    return returnMatrix;
};



// some test cases
console.log(updateMatrix([[0,0,0],[0,1,0],[0,0,0]])); // [[0,0,0],[0,1,0],[0,0,0]]
console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1]])); // [[0,0,0],[0,1,0],[1,2,1]]
