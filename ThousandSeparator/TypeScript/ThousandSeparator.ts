// Solution for: https://leetcode.com/problems/thousand-separator/
const thousandSeparator = (n: number): string => {

    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

// some test cases
console.log(thousandSeparator(987)); // "987"
console.log(thousandSeparator(1234)); // "1.234"
console.log(thousandSeparator(123456789)); // "123.456.789"
console.log(thousandSeparator(0)); // "0"