// Solution for: https://leetcode.com/problems/number-of-atoms/
const countOfAtoms = (formula: string): string => {

    let cur = {};
    let formulaStack = [];
    let charPos = 0;

    while (charPos < formula.length) {
        
        if (formula[charPos] === '(') {
            formulaStack.push(cur);
            cur = {};
            charPos++;
        } else if (formula[charPos] === ')') {
            const [mult, newI] = readNextDigit(++charPos);
            charPos = newI;
            Object.keys(cur).forEach(key => cur[key] *= mult);
            const last = formulaStack[formulaStack.length - 1];
            // merge
            Object.keys(last).forEach(key => last[key] = last[key] + (cur[key] ?? 0));
            Object.keys(cur).forEach(key => {
               if (last[key] === undefined) {
                   last[key] = cur[key];
               } 
            });
            cur = formulaStack.pop();
        } else {
            const [ele, newI] = readNextElement(charPos);
            charPos = newI;
            const [c, nI] = readNextDigit(charPos);
            charPos = nI;
            cur[ele] = (cur[ele] ?? 0) + c;
        }
    }
    
    return Object.entries(cur).sort((a,b) => a[0].localeCompare(b[0])).reduce((r, [key, val]) => r += `${key}${val === 1 ? '' : val}`, "");
    
    
    function readNextElement(charPos) {
        if (!formula[charPos].match(/[A-Z]/)) return null;
        let res = formula[charPos++];
        while (formula[charPos]?.match(/[a-z]/)) {
            res += formula[charPos++];
        }
        
        return [res, charPos];
    }
    
    function readNextDigit(charPos) {
        if (!formula[charPos]?.match(/[0-9]/)) return [1, charPos];
        let res = 0;
        while (formula[charPos]?.match(/[0-9]/)) {
            res = res * 10 + +formula[charPos++];
        }
        
        return [res, charPos];
    }

};





// some test cases
console.log(countOfAtoms("H20")); // "H20"
console.log(countOfAtoms("Mg(OH)2")); // "H2MgO2"
console.log(countOfAtoms("K4(ON(SO3)2)2")); // "K4N2O14S4"