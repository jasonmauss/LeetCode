// Solution for: https://leetcode.com/problems/basic-calculator/
const evaluateExpression = (expression:string[]): number => {
    
    if(expression[0] === '-') expression.splice(0, 0, '0');
    
	let value = Number(expression[0]);

	for (let i = 1; i < expression.length; i += 2) {
		let operator = expression[i];
		let operand = Number(expression[i + 1]);

		if (operator === "+") {
			value += operand;
		} else if (operator === "-") {
			value -= operand;
		}
	}

	return value;
}

const calculate = (s: string): number => {

    const tokens = s.match(/\(|\)|\-|\+|\d+/g).filter(t => t !== '' && t !== ' ');

    tokens.unshift("(");
    tokens.push(")");

    const stack = [];

    for (let i = 0; i < tokens.length; i++) {

        const token = tokens[i];

        if (token === ")") {

            const subExpression = [];
            let currentExpression = stack.pop();

            while (currentExpression !== "(") {
                subExpression.unshift(currentExpression);
                currentExpression = stack.pop();
            }

            const subExpressionValue = evaluateExpression(subExpression);
            stack.push(subExpressionValue);

        } else {

            stack.push(token);

        }
    }

    return stack.pop();

};



// some test cases
console.log(calculate("1 + 1")); // 2
console.log(calculate(" 2-1 + 2 ")); // 3
console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // 23
console.log(calculate("1-(     -2)")); // 3