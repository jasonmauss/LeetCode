// Solution for: https://leetcode.com/problems/number-of-good-ways-to-split-a-string/
const numSplits = (s: string): number => {

    const rightSide:Map<string, number> = new Map<string, number>();
    
    for (const char of s) {
        if (!rightSide.has(char)) rightSide.set(char, 0);
        rightSide.set(char, rightSide.get(char) + 1);
    }
    
    const leftSide = new Set();
    let result = 0;
    
    for (const char of s) {
        rightSide.set(char, rightSide.get(char) - 1);
        if (rightSide.get(char) === 0) rightSide.delete(char);
        
        leftSide.add(char);
         
        if (rightSide.size === leftSide.size) result++;
        if (rightSide.size < leftSide.size) return result; 
    }
    
    return result;

};


// some test cases
console.log(numSplits('aacaba')); // 2
console.log(numSplits('abcd')); // 1