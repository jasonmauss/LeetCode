// Solution for: https://leetcode.com/problems/stream-of-characters/
// The hint mentioned using a Trie so let's give that a shot
interface Trie {
    children: Array<Trie>;
    isEndNode: boolean;
}

let firstOrdinalValue = 'a'.charCodeAt(0);
let totalCharArraySize = 'z'.charCodeAt(0) - firstOrdinalValue;

class StreamChecker {

    _trie: Trie;
    _current: Trie[]; 

    addTrieEntry(trie: Trie, charToAdd:string, isEndNode:boolean = false): Trie {
        let charPos = charToAdd.charCodeAt(0) - firstOrdinalValue;
        if(trie.children[charPos]) {
            trie.children[charPos] = trie.children[charPos]
        } else {
            trie.children[charPos] = {
                isEndNode,
                children: new Array(totalCharArraySize)
            }
        }

        return trie.children[charPos];
    }

    constructor(words: string[]) {
        
        this._trie = {
            isEndNode: false,
            children: new Array(totalCharArraySize)
        };

        for(let i = 0; i < words.length; i++) {
            let t = this._trie;
            for(let j = 0; j < words[i].length; j++) {
                t = this.addTrieEntry(t, words[i][j]);
            }
            t.isEndNode = true;
        }
        this._current = [];

    }

    query(letter: string): boolean {
        let returnValue: boolean = false;
        let valuesToRemove: number[] = [];
        let charPos = letter.charCodeAt(0) - firstOrdinalValue;

        for(let i = 0; i < this._current.length; i++) {
            if(this._current[i].children[charPos]) {
                this._current[i] = this._current[i].children[charPos];
                if(this._current[i].isEndNode) {
                    returnValue = true;
                }
            } else {
                valuesToRemove.push(i);
            }
        }

        for(let i = valuesToRemove.length - 1; i >= 0; i--) {
            this._current.splice(valuesToRemove[i], 1);
        }

        if(this._trie.children[charPos]) {
            this._current.push(this._trie.children[charPos]);
            if(this._trie.children[charPos].isEndNode) {
                returnValue = true;
            }
        }

        return returnValue;
    }
}

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */




// some test cases
/*
Input
["StreamChecker", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query"]
[[["cd", "f", "kl"]], ["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["g"], ["h"], ["i"], ["j"], ["k"], ["l"]]

Output
[null, false, false, false, true, false, true, false, false, false, false, false, true]
*/

let sc:StreamChecker = new StreamChecker(["cd", "f", "kl"]);

console.log(sc.query("a"));
console.log(sc.query("b"));
console.log(sc.query("c"));
console.log(sc.query("d"));
console.log(sc.query("e"));
console.log(sc.query("f"));
console.log(sc.query("g"));
console.log(sc.query("h"));
console.log(sc.query("i"));
console.log(sc.query("j"));
console.log(sc.query("k"));
console.log(sc.query("l"));


// explanattion:
/* 
StreamChecker streamChecker = new StreamChecker(["cd", "f", "kl"]);
streamChecker.query("a"); // return False
streamChecker.query("b"); // return False
streamChecker.query("c"); // return False
streamChecker.query("d"); // return True, because 'cd' is in the wordlist
streamChecker.query("e"); // return False
streamChecker.query("f"); // return True, because 'f' is in the wordlist
streamChecker.query("g"); // return False
streamChecker.query("h"); // return False
streamChecker.query("i"); // return False
streamChecker.query("j"); // return False
streamChecker.query("k"); // return False
streamChecker.query("l"); // return True, because 'kl' is in the wordlist
*/
