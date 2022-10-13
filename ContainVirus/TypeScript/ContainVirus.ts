// Solution for: https://leetcode.com/problems/contain-virus/
const containVirus = (isInfected: number[][]): number => {

    var result = 0;
    
    var totalInfections = isInfected.length;
    var regionSize = isInfected[0].length;
    
    //  use flat idx to make problem easier
    const getKey = (x:number, y:number):number => {
        return x * regionSize + y;
    }

    const getIndexFromKey = (key:number):number[] => {
        return [Math.floor(key / regionSize), key % regionSize];
    }
        
    // for each virus area, we need to cache certain attributes - their {cellIKey, threatCount, wallCount}
    var cells = [];
    var threatAreas = [];
    var wallCounts = [];
    var visited = [];
    
    // the four different directions
    var dx = [0, 0, 1, -1];
    var dy = [1, -1, 0, 0];
    
    // for every virus area
    // mark controlled virus cell as 2
    // return the wall's count to control this area
    var dfs = function(i, j, cellArr, threatSet, wallCount) {

        var key = getKey(i, j);
        if (i < 0 || i >= totalInfections || j < 0 || j >= regionSize || visited[key] || isInfected[i][j] === 2) {
            return wallCount;
        }
        
        // if this cell is virus infected cell, cache its key to the cellArr, and calculate everything for 4 direction
        if (isInfected[i][j] === 1) {
            visited[key] = true;
            cellArr.push(key);
            for (var k = 0; k < dx.length; k++) {
                wallCount = dfs(i + dx[k], j + dy[k], cellArr, threatSet, wallCount);
            }
        } else {
            // if current cell is not infected cell
            // means this cell is the cell may be threat tonight
            // we need a new wall to control it
            // a threat cell may be calculate several time, so we use set here
            wallCount++;
            threatSet.add(key);
        }
        
        return wallCount;
    }
    
    while (true) {
        // for every night
        cells = []; // [virus area cells idx array 0, virus area cells idx array 1, ...]
        threatAreas = [];
        wallCounts = [];
        visited = [];
        
        var maxThreadArea = 0;
        var maxThreadAreaIdx = 0;
        
        for (var i = 0; i < totalInfections; i++) {
            for (var j = 0; j < regionSize; j++) {
                // for a virus cell
                if (isInfected[i][j] === 1) {
                    var cellArr = [];
                    var threatSet = new Set();
                    var wallCount = dfs(i, j, cellArr, threatSet, 0);
                    // if this area do not need wall to control, ignore this area
                    if (!wallCount) {
                        continue;
                    }
                    // cache the area that threatens the most uninfected cells the following night
                    if (threatSet.size > maxThreadArea) {
                        maxThreadArea = threatSet.size;
                        maxThreadAreaIdx = threatAreas.length;
                    }
                    cells.push(cellArr);
                    threatAreas.push(Array.from(threatSet));
                    wallCounts.push(wallCount);
                }
            }
        }
        
        if (!wallCounts.length) {
            break;
        }
        
        // install walls to the area that threatens the most uninfected cells the tonight
        result += wallCounts[maxThreadAreaIdx];
        for (var k = 0; k < wallCounts.length; k++) {
            if (k === maxThreadAreaIdx) {
                cells[k].forEach(cellKey => {
                    var [x, y] = getIndexFromKey(cellKey);
                    isInfected[x][y] = 2;
                });
            } else {
                // threat the areas which not install walls
                threatAreas[k].forEach(cellKey => {
                    var [x, y] = getIndexFromKey(cellKey);
                    isInfected[x][y] = 1;
                });
            }
        }
    }
    
    return result;
    
};





// some test cases
console.log(containVirus([[0,1,0,0,0,0,0,1],[0,1,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0]])); // 10
console.log(containVirus([[1,1,1],[1,0,1],[1,1,1]])); // 4
console.log(containVirus([[1,1,1,0,0,0,0,0,0],[1,0,1,0,1,1,1,1,1],[1,1,1,0,0,0,0,0,0]])); // 13