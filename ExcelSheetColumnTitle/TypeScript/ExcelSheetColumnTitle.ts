// Solution for: https://leetcode.com/problems/excel-sheet-column-title/
const convertToTitle = (columnNumber: number): string => {

    let result = '';

    while(columnNumber > 0) {
        columnNumber--;
        let i:number = Math.floor(columnNumber % 26);
        result = String.fromCharCode(i + 65) + result;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return result;

};

// some tests
console.log(convertToTitle(1)); // "A"
console.log(convertToTitle(28)); // "AB"
console.log(convertToTitle(701)); // "ZY"
console.log(convertToTitle(2147483647)); // "FXSHRXW"