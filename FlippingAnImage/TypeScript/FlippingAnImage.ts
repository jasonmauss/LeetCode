// Solution for: https://leetcode.com/problems/flipping-an-image/
function flipAndInvertImage(image: number[][]): number[][] {

    return image.map(x => x.reverse().map(y => y === 0 ? 1 : 0));

};

// some test cases
console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])); // [[1,0,0],[0,1,0],[1,1,1]]
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])); // [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]