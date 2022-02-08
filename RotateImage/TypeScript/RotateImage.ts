// Solution for: https://leetcode.com/problems/rotate-image/
/**
 Do not return anything, modify matrix in-place instead.
 */
const swapValues = (matrix: number[][], p1: number[], p2: number[]): void => {

    const orig = matrix[p1[0]][p1[1]];
    matrix[p1[0]][p1[1]] = matrix[p2[0]][p2[1]];
    matrix[p2[0]][p2[1]] = orig;

}

const reverse = (array: number[]): void => {

    let i = 0;
    let j = array.length - 1;
    while(i < j) {
        const orig = array[i];
        array[i] = array[j];
        array[j] = orig;
        i++;
        j--;
    }

}

const rotate = (matrix: number[][]): void => {

    for(let i = 0; i < matrix.length; i ++) {
        for(let j = i + 1; j < matrix.length; j ++) {
           if(i === j) {
               continue;
           }
           swapValues(matrix, [i, j], [j, i]);
       }
       reverse(matrix[i]);
   }

};


// some test cases
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]])); // [[7,4,1],[8,5,2],[9,6,3]]
console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]