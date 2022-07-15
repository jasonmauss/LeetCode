// Solution for: https://leetcode.com/problems/brace-expansion-ii/
const union = (a, b) => {
    b.forEach(val => a.add(val));
    return a;
}

const product = (a, b) => {
    const newSet = new Set();
    a.forEach(val => {
        b.forEach(val2 => {
            newSet.add(val + val2);
        })
    })
    return newSet;
}

const createSet = (sets, ops):string[] => {
    let i = 0
    // Order of operations evaluate products before unions
    while (i < ops.length) {
        const operation = ops[i]
        if (operation === product) {
            const [ a, b ] = [sets[i], sets[i + 1]];
            const newSet = operation(a, b);
            ops.splice(i, 1);
            sets.splice(i, 2, newSet);
        } else {
            i++;
        }
    }
    i = 0
    while (ops.length) {
        const operation = ops[i];
        const [ a, b ] = [sets[i], sets[i + 1]];
        const newSet = operation(a, b);
        ops.splice(i, 1);
        sets.splice(i, 2, newSet);
    }
    return sets[0];
}

// return tuple (index, set)
const genSet = (exp: string, startIndex:number):[number, string[]] => {
    const sets = [];
    const operations = [];

    for (let i = startIndex + 1; i < exp.length; i++) {
        const char = exp[i];
        if (char === '{') {
            const [nextIndex, nextSet] = genSet(exp, i);
            i = nextIndex;
            sets.push(nextSet);
        } else if (char === ',') {
            operations.push(union);
        } else if (char === '}') {
            return [i, createSet(sets, operations)];
        } else {
            sets.push(new Set([char]));
        }
        
        if (operations.length < sets.length - 1) {
            operations.push(product);
        }
    }
    return [exp.length, createSet(sets, operations)];
}

const braceExpansionII = (expression: string): string[] => {

    const [_, resultSet] = genSet(expression, -1);
    return Array.from(resultSet).sort();

};



// some test cases
console.log(braceExpansionII("{a,b}{c,{d,e}}")); // ["ac","ad","ae","bc","bd","be"]
console.log(braceExpansionII("{{a,z},a{b,c},{ab,z}}")); // ["a","ab","ac","z"]