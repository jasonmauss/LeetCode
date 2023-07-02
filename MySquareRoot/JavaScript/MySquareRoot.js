// Solution for: https://leetcode.com/problems/sqrtx/
const mySqrt = (x) => {
    if (x === 0 || x === 1)
        return x;
    // binary search
    let left = 1;
    let right = Math.floor(x / 2) + 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (middle * middle > x) {
            right = middle - 1;
        }
        else if (middle * middle < x) {
            left = middle + 1;
        }
        else {
            return middle;
        }
    }
    return right;
};
// some test cases
console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
