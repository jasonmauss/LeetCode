// Solution for: https://leetcode.com/problems/palindromic-substrings/
const countSubstrings = (s: string): number => {

    let count:number = 0 ;
    const length:number = s.length;
    
    for(let i:number = 0 ; i < length ; i++){
        
        for(let j:number = i; j < i + 2 ; j++){
            let left:number = i, right:number = j;
            while(s[left] && s[right] && s[left] === s[right]){
                count++;
                left--;
                right++
            }
        }
    }
    
    return count;

};



// some test cases
console.log(countSubstrings("abc")); //  3
console.log(countSubstrings("aaa")); //  6