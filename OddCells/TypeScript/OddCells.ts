// Solution for: https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/
const oddCells = (m: number, n: number, indices: number[][]): number => {

    const matrices:number[][] = [];
    let oddCellCount:number = 0;

    for(let i = 0; i < m; i++) {
        const tempRow:number[] = Array(n).fill(0);
        matrices.push(tempRow);
    }

    for(let i = 0; i < indices.length; i++) {
        const row:number = indices[i][0];
        const column:number = indices[i][1];

        for(let j = 0; j < n; j++) {
            matrices[row][j]  += 1;
        }

        for(let k = 0; k < m; k++) {
            matrices[k][column] += 1;
        }
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrices[i][j] % 2 !== 0) oddCellCount++;
        }
    }

    return oddCellCount;

};







// some test cases
console.log(oddCells(2, 3, [[0,1],[1,1]])); // 6
console.log(oddCells(2, 2, [[1,1],[0,0]])); // 0