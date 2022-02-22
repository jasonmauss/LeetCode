// Solution for: https://leetcode.com/problems/implement-magic-dictionary/
class MagicDictionary {

    private table = {};

    constructor() {
        this.table = {};
    }

    buildDict(dictionary: string[]): void {
        for (let word of dictionary) {
            this.table[word.length] = (this.table[word.length] || []).concat(word);
        }
    }

    search(searchWord: string): boolean {

        return !!this.table[searchWord.length] && this.table[searchWord.length].some((word:string) => {
            let isModified = false
    
            for (let i = 0; i < searchWord.length; ++i) {
                if (searchWord[i] !== word[i]) {
                    if (isModified) {
                        return false
                    } else {
                        isModified = true
                    }
                }
            }
            return isModified
        })
    }
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */


// some test cases
let obj:MagicDictionary = new MagicDictionary();
obj.buildDict(['hello', 'leetcode']);

let param_2 = obj.search('hello');
console.log(param_2); // false

param_2 = obj.search('hhllo');
console.log(param_2); // true

param_2 = obj.search('hell');
console.log(param_2); // false

param_2 = obj.search('leetcoded');
console.log(param_2); // false