// Solution for: https://leetcode.com/problems/numbers-with-repeated-digits/
const permutation = (n, r) => {
    let nonRepeatingNumbers = 1;
    for (let i = 0; i < r; i++) {
        nonRepeatingNumbers *= n;
        n--;
    }
    return nonRepeatingNumbers;
};
const numDupDigitsAtMostN = (n) => {
    let count = 0;
    const numDigits = [];
    let temp = n + 1;
    while (temp !== 0) {
        const num = temp % 10;
        numDigits.unshift(num);
        temp = parseInt((temp / 10).toString());
    }
    for (let i = 0; i < numDigits.length - 1; i++) {
        count += 9 * permutation(9, i);
    }
    const mySet = new Set();
    for (let i = 0; i < numDigits.length; i++) {
        for (let j = i === 0 ? 1 : 0; j < numDigits[i]; j++) {
            if (mySet.has(j))
                continue;
            count += permutation(10 - (i + 1), numDigits.length - (i + 1));
        }
        if (mySet.has(numDigits[i]))
            break;
        mySet.add(numDigits[i]);
    }
    return n - count;
};
// some test cases
console.log(numDupDigitsAtMostN(20)); // 1
console.log(numDupDigitsAtMostN(100)); // 10
console.log(numDupDigitsAtMostN(1000)); // 262
