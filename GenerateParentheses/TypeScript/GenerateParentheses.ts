// Solution for: https://leetcode.com/problems/generate-parentheses/

const generateParenthesis = (n: number): string[] => {

    // hard code handling the real easy cases
    if (n === 0) return [];
    if (n === 1) return ['()'];
    if (n === 2) return ['()()','(())'];

    const combinations = [];
    const combinationsDictionary = {}; // store combinations already generated based on 'n' value

    for (let i: number = 0; i < n; i++) {
        if (!combinationsDictionary[n - i - 1]) combinationsDictionary[n - i - 1] = generateParenthesis(n - i - 1);
        if (!combinationsDictionary[i]) combinationsDictionary[i] = generateParenthesis(i);

        const innerCombinations = combinationsDictionary[n - i - 1];
        const outerCombinations = combinationsDictionary[i];

        if(innerCombinations.length) {
            innerCombinations.forEach( (ic: string) => {
                const set = `(${ic})`;
                if(outerCombinations.length) {
                    outerCombinations.forEach((oc: string) => {
                        combinations.push(set + oc);
                    })
                } else {
                    combinations.push(set);
                }
            });
        } else {
            if(outerCombinations.length) {
                outerCombinations.forEach( (oc: string) => {
                    combinations.push('()' + oc)
                });
            }
        }
    }

    return combinations;
};


// some test cases
console.log(generateParenthesis(2)); // ["()()", "(())"]
console.log(generateParenthesis(3)); // ["((()))", "(()())", "(())()", "()(())", "()()()"]
console.log(generateParenthesis(4)); // ['(((())))', '((()()))', '((())())', '(()(()))', '(()()())', '((()))()', '(()())()', '(())(())', '(())()()', '()((()))', '()(()())', '()(())()', '()()(())', '()()()()']
console.log(generateParenthesis(5)); // just run it, there should be 42 of them