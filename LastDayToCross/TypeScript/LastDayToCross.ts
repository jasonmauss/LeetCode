// Solution for: https://leetcode.com/problems/last-day-where-you-can-still-cross/
const bfs = (matrix:number[][], index:number, seen: Set<string>):boolean => {

    let node = {i: 0, j: index};
    
    seen.add(`${node.i} ${node.j}`);
    
    let nodes = [node];
    
    while(nodes.length) {
        let childs = [];
        for(let {i, j} of nodes) {
            if(i > 0 && matrix[i-1][j] === 0 && !seen.has(`${i - 1} ${j}`)) {
                childs.push({i: i - 1, j: j});
                seen.add(`${i - 1} ${j}`);
            }
            
            if(i < matrix.length-1 && matrix[i + 1][j] === 0 && !seen.has(`${i + 1} ${j}`)) {
                childs.push({i: i + 1, j: j});
                seen.add(`${i + 1} ${j}`);
                if(i + 1 === matrix.length - 1) return true;      // it means we reached the last row so return true
            }
            
            if(j > 0 && matrix[i][j - 1] === 0 && !seen.has(`${i} ${j - 1}`)) {
                childs.push({i: i, j: j - 1});
                seen.add(`${i} ${j - 1}`);
            }
            
            if(j < matrix[0].length - 1 && matrix[i][j + 1] === 0 && !seen.has(`${i} ${j + 1}`)) {
                childs.push({i: i, j: j + 1});
                seen.add(`${i} ${j + 1}`);
            }
        }
        
        nodes = [...childs];
    }
    
    return false;          // since we have failed to get to last row so far
}

const searchPath = (matrix:number[][]):boolean => {

    let seen = new Set([]);

    for(let i = 0; i < matrix[0].length; i++) {
        if(!seen.has(`0 ${i}`) && matrix[0][i] === 0) {
            let res = bfs(matrix, i, seen);
            if(res) return true;
        }
    }
    
    return false;
}

const latestDayToCross = (row: number, col: number, cells: number[][]): number => {

    let start = 0;
    let end = cells.length - 1;
    
    let answer = 0;
    
    while(start <= end) {

        let mid = Math.floor((start + end) / 2);
        
        let matrix = []
        for(let i = 0; i < row; i++) {
            matrix.push(new Array(col).fill(0));
        }
        
        for(let i = 0; i < mid; i++) {
            let [a, b] = cells[i];
            matrix[a - 1][b - 1] = 1;              // since array is 1-indexed so its -1 correction
        }
        let pathFound = searchPath(matrix)
        if(pathFound) {                       // if path is found we will go even further
            answer = Math.max(answer, mid - 1);
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    return answer + 1;

};


// some test cases
console.log(latestDayToCross(2,2,[[1,1],[2,1],[1,2],[2,2]])); // 2
console.log(latestDayToCross(2,2,[[1,1],[1,2],[2,1],[2,2]])); // 1
console.log(latestDayToCross(3,3,[[1,2],[2,1],[3,3],[2,2],[1,1],[1,3],[2,3],[3,2],[3,1]])) // 3