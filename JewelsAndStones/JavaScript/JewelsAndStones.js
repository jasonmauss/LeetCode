// Solution for: https://leetcode.com/problems/jewels-and-stones/
const numJewelsInStones = (jewels, stones) => {
    let numberOfJewels = 0;
    let uniqueJewels = new Set();
    for (let jewel of jewels) {
        if (!uniqueJewels.has(jewel.charCodeAt(0)))
            uniqueJewels.add(jewel.charCodeAt(0));
    }
    for (let stone of stones) {
        if (uniqueJewels.has(stone.charCodeAt(0)))
            numberOfJewels++;
    }
    return numberOfJewels;
};
// some test cases
console.log(numJewelsInStones('aA', 'aAAbbbb')); // 3
console.log(numJewelsInStones('z', 'ZZ')); // 0
console.log(numJewelsInStones('aAbBcCdD', 'aAAbbbbCCCCDDDeeE')); // 14
