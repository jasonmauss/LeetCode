// Solution for: https://leetcode.com/problems/generate-fibonacci-sequence/
function* fibGenerator() {
    yield 0;
    yield 1;
    let prevValue = 0;
    let nextValue = 1;
    while (true) {
        const returnValue = prevValue + nextValue;
        prevValue = nextValue;
        nextValue = returnValue;
        yield returnValue;
    }
}
;
const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5
console.log(gen.next().value); // 8
// some test cases
//console.log(); // 
