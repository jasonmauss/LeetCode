// Solution for: https://leetcode.com/problems/minimum-bit-flips-to-convert-number/
const minBitFlips = (start: number, goal: number): number => {

    // track how many flips - this is what will be returned
    let minFlips = 0;

    // convert both numbers into a binary string
    let binaryStart = start.toString(2);
    let binaryGoal = goal.toString(2);

    // find the length of the longest of both binary strings
    let maxLength = Math.max(binaryGoal.length, binaryStart.length);
    
    // use that longest length to pad the strings if necessary
    binaryStart = binaryStart.padStart(maxLength, '0');
    binaryGoal = binaryGoal.padStart(maxLength, '0');

    // loop through both strings and add 1 to the flip count
    // if the characters at the same position do not match
    for(let i = 0; i < maxLength; i++) {
        if(binaryGoal.charAt(i) !== binaryStart.charAt(i)) {
            minFlips++;
        }
    }

    return minFlips;

};






// some test cases
console.log(minBitFlips(10, 7)); // 3
console.log(minBitFlips(3, 4)); // 3