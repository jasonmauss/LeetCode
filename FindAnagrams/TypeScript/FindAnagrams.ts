// Solution for: https://leetcode.com/problems/find-all-anagrams-in-a-string/

const findAnagrams = (s: string, p: string): number[] => {
    
    let charMap = new Map();
    for(const char of p){
        charMap.set(char, (charMap.get(char)|| 0) + 1);
    }

    let matchLength = p.length;
    let count = charMap.size;

    let i = 0;
    let j = 0;
    let anagramsPositions:number[] = [];

    while(j < s.length){

        if(charMap.has(s.charAt(j))) {
            charMap.set(s.charAt(j), charMap.get(s.charAt(j)) - 1);
            if(charMap.get(s.charAt(j)) == 0) {
                count--;
            }
        }

        if(j - i + 1 < matchLength){
            j++;
        } else if(j - i + 1 == matchLength) {
            if(count == 0) {
               anagramsPositions.push(i);
            }
            if(charMap.has(s.charAt(i))){
                charMap.set(s.charAt(i), charMap.get(s.charAt(i)) + 1);
            } 
            if(charMap.get(s.charAt(i)) == 1){
                count++;
            }  
            i++;
            j++;
        }
    }
    
    return anagramsPositions;

};


// some test cases
console.log(findAnagrams('cbaebabacd', 'abc')); // [0,6]
console.log(findAnagrams('abab', 'ab')); // [0,1,2]