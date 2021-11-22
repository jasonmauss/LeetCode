// Solution for: https://leetcode.com/problems/keyboard-row/
const findWords = (words: string[]): string[] => {

    let result:string[] = [];

    let charRows:string[] = ['QWERTYUIOP','ASDFGHJKL','ZXCVBNM'];

    words.forEach((word) => {
        const letters:string[] = word.toUpperCase().split('');
        charRows.forEach((chars) => {
            const everyTest = letters.every((letter) => chars.includes(letter));
            if(everyTest) result.push(word);
        });
    });

    return result;
};

// some test cases
console.log(findWords(["Hello","Alaska","Dad","Peace"])); // ["Alaska","Dad"]
console.log(findWords(["omk"])); // []
console.log(findWords(["adsdf","sfd"])); // ["adsdf","sfd"]