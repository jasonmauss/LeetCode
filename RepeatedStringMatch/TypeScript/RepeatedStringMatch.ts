// Solution for: https://leetcode.com/problems/repeated-string-match/
const repeatedStringMatch = (a: string, b: string): number => {
    
    let repeatCount:number = 1;
    let repeatedString:string = '';

    while(repeatedString.length <= b.length) {
        repeatedString = a.repeat(repeatCount);
        if(repeatedString.indexOf(b) > -1) return repeatCount;
        repeatCount++;    
    }
    

    return -1;

};

// some test cases
console.log(repeatedStringMatch("abcd","cdabcdab")); // 3
console.log(repeatedStringMatch("a","aa")); // 2
console.log(repeatedStringMatch("abc","cabcabca")); // 4