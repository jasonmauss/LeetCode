// Solution for: https://leetcode.com/problems/integer-to-roman/
function intToRoman(num) {
    var romanString = '';
    while (num >= 1000) {
        romanString += 'M';
        num = num - 1000;
    }
    if (num >= 900) {
        romanString += 'CM';
        num = num - 900;
    }
    if (num >= 500) {
        romanString += 'D';
        num = num - 500;
    }
    if (num >= 400) {
        romanString += 'CD';
        num = num - 400;
    }
    while (num >= 100) {
        romanString += 'C';
        num = num - 100;
    }
    if (num >= 90) {
        romanString += 'XC';
        num = num - 90;
    }
    if (num >= 50) {
        romanString += 'L';
        num = num - 50;
    }
    if (num >= 40) {
        romanString += 'XL';
        num = num - 40;
    }
    while (num >= 10) {
        romanString += 'X';
        num = num - 10;
    }
    if (num >= 9) {
        romanString += 'IX';
        num = num - 9;
    }
    if (num >= 5) {
        romanString += 'V';
        num = num - 5;
    }
    if (num >= 4) {
        romanString += 'IV';
        num = num - 4;
    }
    while (num >= 1) {
        romanString += 'I';
        num = num - 1;
    }
    return romanString;
}
;
// some test cases
console.log(intToRoman(3)); // III
console.log(intToRoman(4)); // IV
console.log(intToRoman(9)); // IX
console.log(intToRoman(58)); // LVIII
console.log(intToRoman(1994)); // MCMXCIV
