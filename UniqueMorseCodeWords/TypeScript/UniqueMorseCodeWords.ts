// Solution for: https://leetcode.com/problems/unique-morse-code-words/
const uniqueMorseRepresentations = (words: string[]): number => {

    let morseCodes:string[] = [
        ".-","-...","-.-.","-..",".","..-.",
        "--.","....","..",".---",
        "-.-",".-..","--","-.","---",".--.",
        "--.-",".-.","...","-","..-","...-",
        ".--","-..-","-.--","--.."
    ];
    
    let morseTransformations:Set<string> = new Set<string>();
    
    for (let word of words) {        
        let transformation:string = '';
        for (let letter of word) {
            let charIndex:number = letter.charCodeAt(0) - 97;
            transformation += morseCodes[charIndex];
        }
        
        morseTransformations.add(transformation);   
    }
    
    return morseTransformations.size;
};

// some test cases
console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"])); // 2
console.log(uniqueMorseRepresentations(["a"])); // 1