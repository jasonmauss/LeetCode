// Solution for: https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/
const uniqueLetterString = (s: string): number => {

    let last = new Map()
    let penultimate = new Map();
    let result = 0;
    
    for(let i = 0; i < s.length; i++){
        let lastIndex = last.get(s[i]) ?? -1;
        let penultimateIndex = penultimate.get(s[i]) ?? -1;
 
        result += (i - lastIndex) * (lastIndex - penultimateIndex);
        
        penultimate.set(s[i],lastIndex);
        last.set(s[i],i);
    }
    
    last.forEach((value, key) => {
        result += (s.length - value) * (value - (penultimate.get(key) ?? -1));
    });

    return result;

};





// some test cases
console.log(uniqueLetterString('ABC')); // 10
console.log(uniqueLetterString('ABA')); // 8
console.log(uniqueLetterString('LEETCODE')); // 92