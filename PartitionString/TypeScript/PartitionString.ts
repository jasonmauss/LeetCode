// Solution for: https://leetcode.com/problems/optimal-partition-of-string/
const partitionString = (s: string): number => {
    
    let count:number = 0;
    let obj:object = {};

    for(let i:number=0; i<s.length; i++) {
        if(obj[s[i]]) {
           count++;
           obj = {}; 
        }
         obj[s[i]] = 1;
    }

    return count + 1;

};



// some tests
console.log(partitionString('abacaba')); // 4
console.log(partitionString('ssssss')); // 6