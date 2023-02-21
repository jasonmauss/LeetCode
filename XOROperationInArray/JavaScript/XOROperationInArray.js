// Solution for: https://leetcode.com/problems/xor-operation-in-an-array/
const xorOperation = (n, start) => {
    let arr = [];
    let xor = 0;
    for (let i = 0; i < n; i++) {
        arr.push(start + (i * 2));
    }
    xor = arr[0];
    for (let i = 1; i < n; i++) {
        xor = xor ^ arr[i];
    }
    return xor;
};
// some test cases
console.log(xorOperation(5, 0)); // 8
console.log(xorOperation(4, 3)); // 8
