// Solution for: https://leetcode.com/problems/unique-paths-ii/
const uniquePathsWithObstacles = (obstacleGrid: number[][]): number => {

    let rows = obstacleGrid.length;
    let cols = obstacleGrid[0].length;

    if(rows === 0 || cols === 0) return 0;
    if(obstacleGrid[0][0] === 1) return 0;
    if(rows === 1 && cols === 1) return obstacleGrid[0][0] === 0 ? 1 : 0;
    if(rows > 2 && cols > 2 && obstacleGrid[1][0] === 1 && obstacleGrid[0][1] === 1) return 0;

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            obstacleGrid[i][j] = obstacleGrid[i][j] === 0 ? 1 : 0;

            if(i > 0 && j === 0 && obstacleGrid[i-1][j] === 0) {
                obstacleGrid[i][j] = 0;
                continue;
            }

            if(j > 0 && i === 0 && obstacleGrid[i][j-1] === 0){
                obstacleGrid[i][j] = 0;
                continue;
            }

            if(i > 0 && j > 0) {
                obstacleGrid[i][j] = obstacleGrid[i][j]=== 0 ? 0 : obstacleGrid[i-1][j] + obstacleGrid[i][j-1]
            }
        }
    }

    return (obstacleGrid[rows-1][cols-1]);

};





// some test cases
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])); // 2
console.log(uniquePathsWithObstacles([[0,1],[0,0]])); // 1