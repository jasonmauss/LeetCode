// Solution for: https://leetcode.com/problems/find-the-pivot-integer/
const pivotInteger = (n) => {
    if (n === 1)
        return 1;
    for (let counter = 0; counter < n; counter++) {
        if ((counter + 1) * (counter) / 2 === (counter + n) * (n - counter + 1) / 2) {
            return counter;
        }
    }
    return -1;
};
// some test cases
console.log(pivotInteger(8)); // 6
console.log(pivotInteger(1)); // 1
console.log(pivotInteger(4)); // -1
