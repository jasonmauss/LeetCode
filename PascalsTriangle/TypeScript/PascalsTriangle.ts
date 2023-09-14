// Solution for: https://leetcode.com/problems/pascals-triangle/
const generate = (numRows: number): number[][] => {

    const triangleRows = [];
    let parentRow = undefined;

    for(let i = 0; i < numRows; i++) {
        const row = [];
        row.push(1);

        if(parentRow && parentRow.length > 1) {
            for(let j = 0; j < parentRow.length - 1; j++) {
                row.push(parentRow[j] + parentRow[j + 1]);
            }
        }

        if(i > 0) {
            row.push(1);
        }

        triangleRows.push(row);
        parentRow = row;
    }


    return triangleRows;

};







// some test cases
console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]
