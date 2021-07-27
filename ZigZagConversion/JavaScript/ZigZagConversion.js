// Solution for: https://leetcode.com/problems/zigzag-conversion/
function convert(s, numRows) {
    var zigZagArrayContainer = {};
    var arrayNumber = 0;
    if (numRows === 1 || numRows >= s.length)
        return s;
    for (var i = 0; i < s.length; i++) {
        if (typeof zigZagArrayContainer['array' + String(arrayNumber)] === "undefined") {
            zigZagArrayContainer['array' + String(arrayNumber)] = [];
        }
        if ((arrayNumber + 1) === numRows) {
            zigZagArrayContainer['array' + String(arrayNumber)].push(s[i]);
            i++;
            for (var j = numRows - 1; j > 0; j--) {
                if (i < s.length) {
                    zigZagArrayContainer['array' + String(j - 1)].push(s[i]);
                }
                if (j > 1)
                    i++;
            }
            arrayNumber = 1;
        }
        else {
            if (typeof zigZagArrayContainer['array' + String(arrayNumber)] === "undefined") {
                zigZagArrayContainer['array' + String(arrayNumber)] = [];
            }
            zigZagArrayContainer['array' + String(arrayNumber)].push(s[i]);
            arrayNumber++;
        }
    }
    var returnValue = '';
    for (var i = 0; i < numRows; i++) {
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
