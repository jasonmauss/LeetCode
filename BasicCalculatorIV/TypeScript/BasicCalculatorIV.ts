
// Solution for: https://leetcode.com/problems/basic-calculator-iv/
class Unit {

    count:number;
    val:Array<any>;
    valStr:string;

    constructor(count:number, val = []) {
      this.count = count;
      this.val = val;
      this.val.sort();
      this.valStr = this.val.join('*');
    }

    product(u1: Unit) {
      return new Unit(this.count * u1.count, this.val.concat(u1.val));
    }

    toString() {
      return this.count + (this.valStr ? '*' + this.valStr : '');
    }

}

class Expression {
    children: Array<any>;
    dict:Map<any, any>;

    constructor(children = []) {
      this.children = []
      this.dict = new Map()
      for (let child of children) this.addUnit(child)
    }
  
    addUnit(u:Unit) {
      let { dict, children } = this
      if (dict.has(u.valStr))
        children[dict.get(u.valStr)].count += u.count
      else {
        dict.set(u.valStr, children.length)
        children.push(u)
      }
    }
  
    product(exp1 = new Expression) {
      let exp = new Expression
      this.children.forEach(x => {
        exp1.children.forEach(y => {
          exp.addUnit(x.product(y))
        })
      })
      return exp
    }
  
    add(exp1 = new Expression) {
      exp1.children.forEach(x => this.addUnit(x))
      return this
    }
  
    toArray() {
      let group = new Map()
      for (let x of this.children) {
        if (!group.has(x.val.length)) group.set(x.val.length, [])
        x.count != 0 && group.get(x.val.length).push(x)
      }
      let groupArr = [...group.entries()].sort((a, b) => b[0] - a[0])
      return groupArr.map(([_, x]) => {
        x.sort((a, b) => a.valStr.localeCompare(b.valStr))
        return x.map(x => x.toString())
      }).flat()
    }
  }

  function toTokens(str = '') {
    let tokens = [], tmp = '', keyWords = {
      '(': true,
      ')': true,
      '+': true,
      '*': true,
    }
    for (let char of str) {
      if (keyWords[char]) {
        if (tmp) tokens.push(tmp)
        tokens.push(char)
        tmp = ''
        continue
      }
      if (char == ' ') {
        if (tmp) {
          tokens.push(tmp)
          tmp = ''
        }
        continue
      }
      tmp += char
    }
    if (tmp) tokens.push(tmp)
    return tokens
  }
  
  function toVarDic(keys = [], vals = []) {
    let dic = new Map
    for (let i = 0; i < keys.length; i++) {
      dic.set(keys[i], vals[i])
    }
    return dic
  }

const basicCalculatorIV = (expression: string, evalvars: string[], evalints: number[]): string[] => {

    let tokens = toTokens(expression)
    .map(x => /^\d+$/.test(x) ? Number.parseInt(x) : x),
    vals = toVarDic(evalvars, evalints), i = 0

  let exp = nextExp()
  return exp.toArray()


  function nextExp() {
    if (i >= tokens.length) return undefined
    let [exp, op1] = [nextUnit(), nextOperator()]
    if (!op1 || op1 == ')') return exp
    let exp1 = nextUnit()
    while (true) {
      let op2 = nextOperator()
      if (!op2 || op2 == ')') return dealDefault()
      let exp2 = nextUnit()
      switch (op2) {
        case '+':
        case '-':
          exp = dealDefault()
          op1 = op2
          exp1 = exp2
          continue
        case '*':
          exp1 = exp1.product(exp2)
          continue
        default:
          return dealDefault()
      }
      function dealDefault() {
        switch (op1) {
          case '+':
            return exp.add(exp1)
          case '-':
            let expz = exp1.product(new Expression([new Unit(-1, [])]))
            return exp.add(expz)
          case '*':
            return exp.product(exp1)
        }
        debugger
      }
    }
  }

  /**
   * @returns {Expression}
   */
  function nextUnit() {
    if (i >= tokens.length) return undefined
    let rtn
    if (tokens[i] == '(') {
      i++
      return nextExp()
    }
    else if (Number.isInteger(tokens[i])) rtn = new Expression([
      new Unit(tokens[i], [])
    ])
    else if (vals.has(tokens[i])) rtn = new Expression([
      new Unit(vals.get(tokens[i]), [])
    ])
    else rtn = new Expression([
      new Unit(1, [tokens[i]])
    ])
    i++
    return rtn
  }

  function nextOperator() {
    if (i >= tokens.length) return undefined
    let op = tokens[i]
    i++
    return op
  }

};






// some test cases
console.log(basicCalculatorIV("e + 8 - a + 5", ['e'], [1])); // ["-1*a","14"]
console.log(basicCalculatorIV("e - 8 + temperature - pressure", ["e", "temperature"], [1, 12])); // ["-1*pressure","5"]
console.log(basicCalculatorIV("(e + 8) * (e - 8)", [], [])); // ["1*e*e","-64"]