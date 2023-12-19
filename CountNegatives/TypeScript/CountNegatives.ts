// Solution for: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

const countNegatives = (grid: number[][]): number => {
    
    let totalNegatives = 0;
    
    for(const nums of grid) {
        totalNegatives += nums.filter(x => x < 0).length;
    }

    return totalNegatives;
};

// could do a one-liner like return grid.flat().filter(x => x < 0).length
// but that's actually less performant than just looping through each sub-array.


// some tests
console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])); // 8
console.log(countNegatives([[3,2],[1,0]])); // 0