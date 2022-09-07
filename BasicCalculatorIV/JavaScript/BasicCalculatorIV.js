// Solution for: https://leetcode.com/problems/basic-calculator-iv/
const basicCalculatorIV = (expression, evalvars, evalints) => {
    return [''];
};
// some test cases
console.log(basicCalculatorIV("e + 8 - a + 5", ['e'], [1])); // ["-1*a","14"]
console.log(basicCalculatorIV("e - 8 + temperature - pressure", ["e", "temperature"], [1, 12])); // ["-1*pressure","5"]
console.log(basicCalculatorIV("(e + 8) * (e - 8)", [], [])); // ["1*e*e","-64"]
