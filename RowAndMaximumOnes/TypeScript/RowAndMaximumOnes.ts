// Solution for: https://leetcode.com/problems/row-with-maximum-ones/
const rowAndMaximumOnes = (mat: number[][]): number[] => {

    let maxRow = 0;
    let maxCount = 0;

    for(let i = 0; i < mat.length; i++) {
        let tempCount = mat[i].filter(x => x === 1).length;
        if(tempCount > maxCount) {
            maxRow = i;
            maxCount = tempCount;
        }
    }

    return [maxRow, maxCount];

};





// some test cases
console.log(rowAndMaximumOnes([[0,1],[1,0]])); // [0,1]
console.log(rowAndMaximumOnes([[0,0,0],[0,1,1]])); // [1,2]
console.log(rowAndMaximumOnes([[0,0],[1,1],[0,0]])); // [1,2]