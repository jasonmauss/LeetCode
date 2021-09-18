// Solution for: https://leetcode.com/problems/truncate-sentence/
var truncateSentence = function (s, k) {
    var lastPos = 0;
    s += ' ';
    for (var i = 0; i < k; i++) {
        lastPos = s.indexOf(' ', lastPos + 1);
    }
    return s.substring(0, lastPos);
};
// another shorter one-line solution, but uses more memory
/* const truncateSentence = (s: string, k: number): string => {
    return s.split(' ').slice(0, k).join(' ');
}; */
// some test cases
console.log(truncateSentence("Hello how are you Contestant", 4)); // "Hello how are you"
console.log(truncateSentence("What is the solution to this problem", 4)); // "What is the solution"
console.log(truncateSentence("chopper is not a tanuki", 5)); // "chopper is not a tanuki"
console.log(truncateSentence("a chopper is not a tanuki", 5)); // "a chopper is not a"
