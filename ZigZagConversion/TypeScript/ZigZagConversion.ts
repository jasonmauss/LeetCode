// Solution for: https://leetcode.com/problems/zigzag-conversion/

interface ArrayContainer {
    [name: string]: Array<string>;
}

function convert(s: string, numRows: number): string {

    let zigZagArrayContainer: ArrayContainer = { };
    let arrayNumber = 0;
    if(numRows === 1 || numRows >= s.length) return s;

    for(let i: number = 0; i < s.length; i++) {
        if (typeof zigZagArrayContainer['array' + String(arrayNumber)] === "undefined") {
            zigZagArrayContainer['array' + String(arrayNumber)] = [];
        }

        if((arrayNumber + 1) === numRows) {
            zigZagArrayContainer['array' + String(arrayNumber)].push(s[i]);
            i++;
            for(let j: number = numRows - 1; j > 0; j--) {
                if(i < s.length) {
                    zigZagArrayContainer['array' + String(j - 1)].push(s[i]);
                }
                if(j > 1) i++;
            }
            arrayNumber = 1;
        } else {
            if (typeof zigZagArrayContainer['array' + String(arrayNumber)] === "undefined") {
                zigZagArrayContainer['array' + String(arrayNumber)] = [];
            }
            zigZagArrayContainer['array' + String(arrayNumber)].push(s[i])
            arrayNumber++;
        }
    }

    let returnValue: string = '';
    for(let i: number = 0; i < numRows; i++) {
        if (typeof zigZagArrayContainer['array' + String(i)] !== "undefined") {
            returnValue += zigZagArrayContainer['array' + String(i)].join('');
        }
    }

    return returnValue;

}

// some test cases
console.log(convert('PAYPALISHIRING', 3)); // PAHNAPLSIIGYIR
console.log(convert('PAYPALISHIRING', 4)); // PINALSIGYAHRPI
console.log(convert('ABCD', 2)); // ACBD