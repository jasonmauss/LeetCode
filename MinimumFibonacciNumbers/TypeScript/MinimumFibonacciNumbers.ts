// Solution for: https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/
const setupFibonacci = (f: number, fibonacci: number[]) => {
    
    fibonacci.push(...[1,1,2]);

    let nextInSequence = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];

    while(nextInSequence <= f) {
        fibonacci.push(nextInSequence);
        nextInSequence = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    }

};

const findMinFibonacciNumbers = (k: number): number => {

    let fibonacci:number[] = [];
    setupFibonacci(k, fibonacci);

    let result:number = 0;

    if(fibonacci[fibonacci.length - 1] === k) return 1;

    let runningTotal:number = 0;

    for(let i:number = fibonacci.length; i >= 0; i--) {
        if(fibonacci[i] + runningTotal <= k) {
            runningTotal += fibonacci[i];
            result++;
            if(runningTotal === k) return result;
        }
    }

    return result;

};

// some test cases
console.log(findMinFibonacciNumbers(7)); // 2
console.log(findMinFibonacciNumbers(10)); // 2
console.log(findMinFibonacciNumbers(19)); // 3
console.log(findMinFibonacciNumbers(46)); // 3