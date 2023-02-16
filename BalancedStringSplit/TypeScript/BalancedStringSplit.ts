// Solution for: https://leetcode.com/problems/split-a-string-in-balanced-strings/
const balancedStringSplit = (s: string): number => {

    let balancedStringPairs = 0;

    let letterLCount = 0;
    let letterRCount = 0;

    for(let char of s) {
        if(char === 'L')
            letterLCount++;
        else
            letterRCount++;

        if(letterLCount ===  letterRCount) {
            balancedStringPairs++;
            letterLCount = 0;
            letterRCount = 0;
        }

        
    }

    return balancedStringPairs;

};




// some test cases
console.log(balancedStringSplit('RLRRLLRLRL')); // 4
console.log(balancedStringSplit('RLRRRLLRLL')); // 2
console.log(balancedStringSplit('LLLLRRRR')); // 1
console.log(balancedStringSplit('LLRLRRLRLRLLLLRRRRLLLRLRLRLRRR')); // 5