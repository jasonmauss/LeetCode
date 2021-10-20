// Solution for: https://leetcode.com/problems/consecutive-characters/
const maxPower = (s: string): number => {

    if(s === '') return 0;
    if(s.length === 1) return 1;

    let longestConsecutive:number = 1;
    let prevChar = s[0];
    let currentConsecutiveCount = 1;

    for(let i:number = 1; i < s.length; i++) {
        if(s[i] === prevChar) {
            currentConsecutiveCount++;
        } else {
            longestConsecutive = Math.max(longestConsecutive, currentConsecutiveCount);
            currentConsecutiveCount = 1;
        }
        prevChar = s[i];
    }

    longestConsecutive = Math.max(longestConsecutive, currentConsecutiveCount);
    return longestConsecutive;
};


// some test cases
console.log(maxPower("leetcode")); // 2
console.log(maxPower("abbcccddddeeeeedcba")); // 5
console.log(maxPower("triplepillooooow")); // 5
console.log(maxPower("hooraaaaaaaaaaay")); // 11
console.log(maxPower("tourist")); // 1