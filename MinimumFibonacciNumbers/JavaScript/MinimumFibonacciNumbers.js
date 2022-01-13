// Solution for: https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/
var setupFibonacci = function (f, fibonacci) {
    fibonacci.push.apply(fibonacci, [1, 1, 2]);
    var nextInSequence = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    while (nextInSequence <= f) {
        fibonacci.push(nextInSequence);
        nextInSequence = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    }
};
var findMinFibonacciNumbers = function (k) {
    var fibonacci = [];
    setupFibonacci(k, fibonacci);
    var result = 0;
    if (fibonacci[fibonacci.length - 1] === k)
        return 1;
    var runningTotal = 0;
    for (var i = fibonacci.length; i >= 0; i--) {
        if (fibonacci[i] + runningTotal <= k) {
            runningTotal += fibonacci[i];
            result++;
            if (runningTotal === k)
                return result;
        }
    }
    return result;
};
// some test cases
console.log(findMinFibonacciNumbers(7)); // 2
console.log(findMinFibonacciNumbers(10)); // 2
console.log(findMinFibonacciNumbers(19)); // 3
console.log(findMinFibonacciNumbers(46)); // 3
