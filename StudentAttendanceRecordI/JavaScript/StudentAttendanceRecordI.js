// Solution for: https://leetcode.com/problems/student-attendance-record-i
var checkRecord = function (s) {
    // the long way
    // let totalAbscences:number = 0;
    // let consecutiveDaysLate:number = 0;
    // for(let char of s) {
    //     if(char === 'A') {
    //         totalAbscences++;
    //         if(totalAbscences === 2) {
    //             return false;
    //         }
    //         consecutiveDaysLate = 0;
    //     }
    //     if(char === 'L') {
    //         consecutiveDaysLate++;
    //         if(consecutiveDaysLate === 3) {
    //             return false;
    //         }
    //     }
    //     if(char === 'P') {
    //         consecutiveDaysLate = 0;
    //     }
    // }
    // return totalAbscences < 2 && consecutiveDaysLate < 3;
    // the short way
    return s.split('').filter(function (x) { return x === 'A'; }).length < 2 && !s.includes('LLL');
};
// some test cases
console.log(checkRecord('PPALLP')); // true
console.log(checkRecord('PPALLL')); // false
