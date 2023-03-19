// Solution for: https://leetcode.com/problems/delete-greatest-value-in-each-row/
const deleteGreatestValue = (grid: number[][]): number => {

    let greatestSumTotal = 0;

    for(let gridIndex = 0; gridIndex < grid.length; gridIndex++) {
        grid[gridIndex].sort((a, b) => a - b);
    }

    let removedValues = [];

    while(grid[0].length > 0) {

        for(let gridIndex = 0; gridIndex < grid.length; gridIndex++) {    
            const curGrid = grid[gridIndex];
            removedValues.push(curGrid.pop());
        }

        greatestSumTotal += Math.max(...removedValues);
        removedValues = [];
    }

    return greatestSumTotal;

};






// some test cases
console.log(deleteGreatestValue([[1,2,4],[3,3,1]])); // 8
console.log(deleteGreatestValue([[10]])); // 10