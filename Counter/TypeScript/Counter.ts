// Solution for: https://leetcode.com/problems/counter/
function createCounter(n: number): () => number {
    return function() {
        return 0;
    }
}






// some test cases
const counter = createCounter(10);
console.log(counter()); // 11
console.log(counter()); // 12
console.log(counter()); // 13