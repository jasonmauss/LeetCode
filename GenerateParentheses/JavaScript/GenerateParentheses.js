// Solution for: https://leetcode.com/problems/generate-parentheses/
var generateParenthesis = function (n) {
    // hard code handling the real easy cases
    if (n === 0)
        return [];
    if (n === 1)
        return ['()'];
    if (n === 2)
        return ['()()', '(())'];
    var combinations = [];
    var combinationsDictionary = {}; // store combinations already generated based on 'n' value
    var _loop_1 = function (i) {
        if (!combinationsDictionary[n - i - 1])
            combinationsDictionary[n - i - 1] = generateParenthesis(n - i - 1);
        if (!combinationsDictionary[i])
            combinationsDictionary[i] = generateParenthesis(i);
        var innerCombinations = combinationsDictionary[n - i - 1];
        var outerCombinations = combinationsDictionary[i];
        if (innerCombinations.length) {
            innerCombinations.forEach(function (ic) {
                var set = "(" + ic + ")";
                if (outerCombinations.length) {
                    outerCombinations.forEach(function (oc) {
                        combinations.push(set + oc);
                    });
                }
                else {
                    combinations.push(set);
                }
            });
        }
        else {
            if (outerCombinations.length) {
                outerCombinations.forEach(function (oc) {
                    combinations.push('()' + oc);
                });
            }
        }
    };
    for (var i = 0; i < n; i++) {
        _loop_1(i);
    }
    return combinations;
};
// some test cases
console.log(generateParenthesis(2)); // ["()()", "(())"]
console.log(generateParenthesis(3)); // ["((()))", "(()())", "(())()", "()(())", "()()()"]
console.log(generateParenthesis(4)); // ['(((())))', '((()()))', '((())())', '(()(()))', '(()()())', '((()))()', '(()())()', '(())(())', '(())()()', '()((()))', '()(()())', '()(())()', '()()(())', '()()()()']
console.log(generateParenthesis(5)); // just run it, there should be 42 of them
