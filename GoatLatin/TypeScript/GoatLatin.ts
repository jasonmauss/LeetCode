// Solution for: https://leetcode.com/problems/goat-latin/
const toGoatLatin = (sentence: string): string => {

    const words: string[] = sentence.split(' ');

    for(let i:number = 0; i < words.length; i++) {
        words[i] = convertWord(words[i], i);
    }

    return words.join(' ');;
};

const convertWord = (word: string, index: number): string => {
    
    if(['a','e','i','o','u'].some(vowel => word.toLowerCase().startsWith(vowel))) {
        word += 'ma';
    } else {
        word = word.substring(1) + word.substring(0,1) + 'ma';
    }
    
    word += 'a'.repeat(index + 1);

    return word;
}

// some test cases
console.log(toGoatLatin("I speak Goat Latin")); // "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog")); // "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"