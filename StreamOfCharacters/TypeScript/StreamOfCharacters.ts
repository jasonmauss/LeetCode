// Solution for: https://leetcode.com/problems/stream-of-characters/
class StreamChecker {

    private _words:string[];

    constructor(words: string[]) {
        this._words = words;
    }

    query(letter: string): boolean {
        return false;
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
