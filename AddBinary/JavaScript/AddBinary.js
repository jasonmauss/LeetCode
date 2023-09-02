// Solution for: https://leetcode.com/problems/add-binary/
const addBinary = (a, b) => {
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};
// some test cases
console.log(addBinary("11", "1")); // "100"
console.log(addBinary("1010", "1011")); // "10101"
