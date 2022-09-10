// Solution for: https://leetcode.com/problems/basic-calculator-iv/
class Unit {
    count;
    val;
    valStr;
    constructor(count, val = []) {
        this.count = count;
        this.val = val;
        this.val.sort();
        this.valStr = this.val.join('*');
    }
    product(u1) {
        return new Unit(this.count * u1.count, this.val.concat(u1.val));
    }
    toString() {
        return this.count + (this.valStr ? '*' + this.valStr : '');
    }
}
class Expression {
    children;
    dict;
    constructor(children = []) {
        this.children = [];
        this.dict = new Map();
        for (let child of children)
            this.addUnit(child);
    }
    addUnit(u) {
        let { dict, children } = this;
        if (dict.has(u.valStr))
            children[dict.get(u.valStr)].count += u.count;
        else {
            dict.set(u.valStr, children.length);
            children.push(u);
        }
    }
    product(exp1 = new Expression) {
        let exp = new Expression();
        this.children.forEach(x => {
            exp1.children.forEach(y => {
                exp.addUnit(x.product(y));
            });
        });
        return exp;
    }
    add(exp1 = new Expression) {
        exp1.children.forEach(x => this.addUnit(x));
        return this;
    }
    toArray() {
        let group = new Map();
        for (let child of this.children) {
            if (!group.has(child.val.length))
                group.set(child.val.length, []);
            child.count != 0 && group.get(child.val.length).push(child);
        }
        let groupArr = [...group.entries()].sort((a, b) => b[0] - a[0]);
        return groupArr.map(([_, x]) => {
            x.sort((a, b) => a.valStr.localeCompare(b.valStr));
            return x.map(x => x.toString());
        }).flat();
    }
}
const expressionToTokens = (expression = '') => {
    let tokens = [];
    let tokenCharsBuffer = '';
    let keywords = {
        '(': true,
        ')': true,
        '+': true,
        '*': true,
    };
    for (let char of expression) {
        if (keywords[char]) {
            if (tokenCharsBuffer)
                tokens.push(tokenCharsBuffer);
            tokens.push(char);
            tokenCharsBuffer = '';
            continue;
        }
        if (char == ' ') {
            if (tokenCharsBuffer) {
                tokens.push(tokenCharsBuffer);
                tokenCharsBuffer = '';
            }
            continue;
        }
        tokenCharsBuffer += char;
    }
    if (tokenCharsBuffer)
        tokens.push(tokenCharsBuffer);
    return tokens;
};
const toVarDict = (keys = [], vals = []) => {
    let dict = new Map();
    for (let i = 0; i < keys.length; i++) {
        dict.set(keys[i], vals[i]);
    }
    return dict;
};
const basicCalculatorIV = (expression, evalvars, evalints) => {
    let tokens = expressionToTokens(expression).map(x => /^\d+$/.test(x.toString()) ? Number.parseInt(x.toString()) : x);
    let vals = toVarDict(evalvars, evalints);
    let i = 0;
    let exp = nextExp();
    return exp.toArray();
    function nextExp() {
        if (i >= tokens.length)
            return undefined;
        let [exp, op1] = [nextUnit(), nextOperator()];
        if (!op1 || op1 == ')')
            return exp;
        let exp1 = nextUnit();
        while (true) {
            let op2 = nextOperator();
            if (!op2 || op2 == ')')
                return dealDefault();
            let exp2 = nextUnit();
            switch (op2) {
                case '+':
                case '-':
                    exp = dealDefault();
                    op1 = op2;
                    exp1 = exp2;
                    continue;
                case '*':
                    exp1 = exp1.product(exp2);
                    continue;
                default:
                    return dealDefault();
            }
            function dealDefault() {
                switch (op1) {
                    case '+':
                        return exp.add(exp1);
                    case '-':
                        let expz = exp1.product(new Expression([new Unit(-1, [])]));
                        return exp.add(expz);
                    case '*':
                        return exp.product(exp1);
                }
                debugger;
            }
        }
    }
    function nextUnit() {
        if (i >= tokens.length)
            return undefined;
        let returnValue;
        if (tokens[i] == '(') {
            i++;
            return nextExp();
        }
        else if (Number.isInteger(tokens[i]))
            returnValue = new Expression([
                new Unit(tokens[i], [])
            ]);
        else if (vals.has(tokens[i].toString()))
            returnValue = new Expression([
                new Unit(vals.get(tokens[i].toString()), [])
            ]);
        else
            returnValue = new Expression([
                new Unit(1, [tokens[i]])
            ]);
        i++;
        return returnValue;
    }
    function nextOperator() {
        if (i >= tokens.length)
            return undefined;
        let op = tokens[i];
        i++;
        return op;
    }
};
// some test cases
console.log(basicCalculatorIV("e + 8 - a + 5", ['e'], [1])); // ["-1*a","14"]
console.log(basicCalculatorIV("e - 8 + temperature - pressure", ["e", "temperature"], [1, 12])); // ["-1*pressure","5"]
console.log(basicCalculatorIV("(e + 8) * (e - 8)", [], [])); // ["1*e*e","-64"]
