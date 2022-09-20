// Solution for: https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/
const ways = (pizza: string[], k: number): number => {

    let result = 0;
    let appleCount = 0;

    for (var row of pizza) {
        for (let i = 0; i < row.length; i++) {
            if (row[i] === 'A') appleCount++;
        }
    }

    let m = pizza.length;
    let n = m ? pizza[0].length : 0;
    let map = {};
    
    const handler = (rowStart:number, colStart:number, curK:number): number => {

        if (curK === 1) {
            result += 1;
            result %= 1000000007;
            return;
        }
        
        if (map[rowStart + ' ' + colStart + ' ' + curK]) {
            result += map[rowStart + ' ' + colStart + ' ' + curK];
            result %= 1000000007;
            return;
        }
        
        let tmpResult = result;
        
        let cutAppleCount = 0;
        
        for (var i = rowStart; i < m - 1; i++) {
            let row = pizza[i];
            for (let j = colStart; j < n; j++) {
                if (row[j] === 'A') cutAppleCount++;
            }
            if (cutAppleCount + curK - 1 > appleCount) break;
            if (cutAppleCount >= 1) {
                appleCount -= cutAppleCount;
                handler(i + 1, colStart, curK - 1);
                appleCount += cutAppleCount;   
            }
        }
        
        cutAppleCount = 0;
        
        for (let j = colStart; j < n - 1; j++) {
            let row = pizza[i];
            for (var i = rowStart; i < m; i++) {
                if (pizza[i][j] === 'A') cutAppleCount++;
            }
            if (cutAppleCount + curK - 1 > appleCount) break;
            if (cutAppleCount >= 1) {
                appleCount -= cutAppleCount;
                handler(rowStart, j + 1, curK - 1);
                appleCount += cutAppleCount;   
            }
        }
        
        map[rowStart + ' ' + colStart + ' ' + curK] = result - tmpResult;
        
    }
    
    handler(0, 0, k);
    
    return result;

};






// some test cases
console.log(ways(["A..","AAA","..."], 3)); // 3
console.log(ways(["A..","AA.","..."], 3)); // 1
console.log(ways(["A..","A..","..."], 1)); // 1