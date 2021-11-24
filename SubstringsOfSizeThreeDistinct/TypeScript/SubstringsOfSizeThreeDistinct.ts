// Solution for: https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
const countGoodSubstrings = (s: string): number => {

    let n:number = s.length;
    if (n < 3) return 0;

    let count:number = 0;

    let stringArray = [s[0], s[1]];
    for (let i = 2; i < n; i++) {
        stringArray.push(s[i]);
        if (new Set(stringArray).size === 3) {
            count++;
        }
        stringArray.shift();
    }

    return count;

};

// some test cases
console.log(countGoodSubstrings("xyzzaz")); // 1
console.log(countGoodSubstrings("aababcabc")); // 4
