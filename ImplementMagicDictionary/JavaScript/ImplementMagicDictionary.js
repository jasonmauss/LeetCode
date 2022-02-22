// Solution for: https://leetcode.com/problems/implement-magic-dictionary/
var MagicDictionary = /** @class */ (function () {
    function MagicDictionary() {
        this.table = {};
        this.table = {};
    }
    MagicDictionary.prototype.buildDict = function (dictionary) {
        for (var _i = 0, dictionary_1 = dictionary; _i < dictionary_1.length; _i++) {
            var word = dictionary_1[_i];
            this.table[word.length] = (this.table[word.length] || []).concat(word);
        }
    };
    MagicDictionary.prototype.search = function (searchWord) {
        return !!this.table[searchWord.length] && this.table[searchWord.length].some(function (word) {
            var isModified = false;
            for (var i = 0; i < searchWord.length; ++i) {
                if (searchWord[i] !== word[i]) {
                    if (isModified) {
                        return false;
                    }
                    else {
                        isModified = true;
                    }
                }
            }
            return isModified;
        });
    };
    return MagicDictionary;
}());
/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
// some test cases
var obj = new MagicDictionary();
obj.buildDict(['hello', 'leetcode']);
var param_2 = obj.search('hello');
console.log(param_2); // false
param_2 = obj.search('hhllo');
console.log(param_2); // true
param_2 = obj.search('hell');
console.log(param_2); // false
param_2 = obj.search('leetcoded');
console.log(param_2); // false
