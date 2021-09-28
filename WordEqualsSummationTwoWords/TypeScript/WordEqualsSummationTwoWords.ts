// Solution for: https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/
const isSumEqual = (firstWord: string, secondWord: string, targetWord: string): boolean => {

    // if we use charCodeAt() and deduct 97 from it ("a" = 97)
    // then we can get relative values for each letter and then
    // just add them up
    let firstWordValue:number = getWordValue(firstWord);
    let secondWordValue:number = getWordValue(secondWord);
    return firstWordValue + secondWordValue === getWordValue(targetWord);
};

const getWordValue = (word: string): number => {

    let numericString:string = '';

    for(let i:number = 0; i < word.length; i++) {
        numericString += (word.charCodeAt(i) - 97).toString();
    }

    return Number(numericString);

};


// some test cases
console.log(isSumEqual('acb','cba','cdb')); // true
console.log(isSumEqual('aaa','a','aab')); // false
console.log(isSumEqual('aaa','a','aaaa')); // true
