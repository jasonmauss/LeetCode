// Solution for: https://leetcode.com/problems/shortest-common-supersequence/
const shortestCommonSupersequence = (str1: string, str2: string): string => {

    let sequence = [];
    
    for(let rctr = 0; rctr <= str1.length; rctr++) {

        let arr = [];
        
        for(let cctr = 0; cctr <= str2.length; cctr ++) arr.push(0);
        
        sequence.push(arr);
    }
    
    for(let row = 1; row <= str1.length; row++) {
    
        for(let col = 1; col <= str2.length; col++) {
            
            if(str1[row-1] === str2[col-1])
                sequence[row][col] = 1 + sequence[row-1][col-1];
            else
                sequence[row][col] = Math.max(sequence[row-1][col], sequence[row][col-1]);
        }
    }

    let row = str1.length
    let col = str2.length ;
    
    let answer = '';
    
    while(row > 0 && col > 0) {
        
        if(str1[row-1] === str2[col-1]) {
            answer += str1[row-1];
            row -=1;
            col -=1;
            continue;
        }
        
        if(sequence[row-1][col] > sequence[row][col-1]) {
            answer += str1[row-1];
            row-=1;
        } else {
            answer+= str2[col-1]
            col -=1
        }
    }

    while(row > 0) {
        answer += str1[row-1]
        row -=1;
    }
    
    while(col > 0) {
        answer += str2[col-1];
        col -=1;
    }
    
    return answer.split("").reverse().join('');

};




// some test cases
console.log(shortestCommonSupersequence('abac', 'cab')); // "cabac"
console.log(shortestCommonSupersequence('aaaaaaaa', 'aaaaaaaa')); // "aaaaaaaa"