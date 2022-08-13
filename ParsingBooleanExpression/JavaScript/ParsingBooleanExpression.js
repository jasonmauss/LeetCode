// Solution for: https://leetcode.com/problems/parsing-a-boolean-expression/
const parseBoolExpr = (expression) => {
    if (expression === 't')
        return true;
    if (expression === 'f')
        return false;
    const operator = expression.charAt(0), content = expression.substring(2, expression.length - 1);
    if (operator === '!')
        return !parseBoolExpr(content);
    const opArray = [];
    let level = 0, si = 0;
    for (let i = 0; i < content.length; ++i) {
        if (content[i] === '(')
            ++level;
        else if (content[i] === ')')
            --level;
        if (level === 0 && (content[i] === 't' || content[i] === 'f' || content[i] === ')')) {
            opArray.push(content.substring(si, i + 1));
            si = i + 2;
        }
    }
    let b;
    if (operator === '&')
        for (let a of opArray)
            b = b !== undefined ? b && parseBoolExpr(a) : parseBoolExpr(a);
    else if (operator === '|')
        for (let a of opArray)
            b = b || parseBoolExpr(a);
    return b;
};
// some test cases
console.log(parseBoolExpr("!(f)")); // true
console.log(parseBoolExpr("|(f,t)")); // true
console.log(parseBoolExpr("&(t,f)")); // false
