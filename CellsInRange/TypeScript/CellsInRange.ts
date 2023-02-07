// Solution for: https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/
const cellsInRange = (s: string): string[] => {

    const [startCell, endCell] = s.split(':');

    let startCellRowNum = startCell.charCodeAt(0);
    let startCellColumnNum = Number(startCell.substring(1));
    let endCellRowNum = endCell.charCodeAt(0);
    let endCellColumnNum = Number(endCell.substring(1));

    let CellsInRangeArray = [];

    for(let rowPosition = startCellRowNum; rowPosition <= endCellRowNum; rowPosition++) {
        for(let cellPosition = startCellColumnNum; cellPosition <= endCellColumnNum; cellPosition++) {
            CellsInRangeArray.push(String.fromCharCode(rowPosition) + cellPosition);
        }
    }

    return CellsInRangeArray;
};




// some test cases  
console.log(cellsInRange("K1:L2")); // ["K1","K2","L1","L2"]
console.log(cellsInRange("A1:F1")); // ["A1","B1","C1","D1","E1","F1"]