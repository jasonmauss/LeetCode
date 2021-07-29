// Solution for: https://leetcode.com/problems/string-to-integer-atoi/
function myAtoi(s) {
    // trim any leading whitespace characters
    s = s.trimStart();
    const isNegative = s.startsWith('-');
    const isPositive = s.startsWith('+');
    const isNumber = (val) => !!(val || val === 0) && !isNaN(Number(val.toString()));
    if (isNegative || isPositive)
        s = s.slice(1);
    let numericString = '';
    for (let i = 0; i < s.length; i++) {
        if (isNumber(s.substring(i, i + 1).trim())) {
            numericString += s.substring(i, i + 1);
        }
        else {
            break;
        }
    }
    if (numericString.length === 0) {
        return 0;
    }
    let numericValue = Number(numericString);
    if (isNegative && numericValue > 0x80000000)
        numericValue = 0x80000000;
    if (!isNegative && numericValue > 0x7FFFFFFF)
        numericValue = 0x7FFFFFFF;
    return isNegative ? numericValue * -1 : numericValue;
}
;
// some test cases
console.log(myAtoi('42')); // 42
console.log(myAtoi('   -42')); // -42
console.log(myAtoi('4193 with words')); // 4193
console.log(myAtoi('words and 987')); // 0
console.log(myAtoi('-91283472332')); // -2147483648
console.log(myAtoi("   +0 123")); // 0
//# sourceMappingURL=StringToInteger(atoi).js.map