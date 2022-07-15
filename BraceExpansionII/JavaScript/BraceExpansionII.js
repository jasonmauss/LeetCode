// Solution for: https://leetcode.com/problems/brace-expansion-ii/
var union = function (a, b) {
    b.forEach(function (val) { return a.add(val); });
    return a;
};
var product = function (a, b) {
    var newSet = new Set();
    a.forEach(function (val) {
        b.forEach(function (val2) {
            newSet.add(val + val2);
        });
    });
    return newSet;
};
var createSet = function (sets, ops) {
    var i = 0;
    // Order of operations evaluate products before unions
    while (i < ops.length) {
        var operation = ops[i];
        if (operation === product) {
            var _a = [sets[i], sets[i + 1]], a = _a[0], b = _a[1];
            var newSet = operation(a, b);
            ops.splice(i, 1);
            sets.splice(i, 2, newSet);
        }
        else {
            i++;
        }
    }
    i = 0;
    while (ops.length) {
        var operation = ops[i];
        var _b = [sets[i], sets[i + 1]], a = _b[0], b = _b[1];
        var newSet = operation(a, b);
        ops.splice(i, 1);
        sets.splice(i, 2, newSet);
    }
    return sets[0];
};
// return tuple (index, set)
var genSet = function (exp, startIndex) {
    var sets = [];
    var operations = [];
    for (var i = startIndex + 1; i < exp.length; i++) {
        var char = exp[i];
        if (char === '{') {
            var _a = genSet(exp, i), nextIndex = _a[0], nextSet = _a[1];
            i = nextIndex;
            sets.push(nextSet);
        }
        else if (char === ',') {
            operations.push(union);
        }
        else if (char === '}') {
            return [i, createSet(sets, operations)];
        }
        else {
            sets.push(new Set([char]));
        }
        if (operations.length < sets.length - 1) {
            operations.push(product);
        }
    }
    return [exp.length, createSet(sets, operations)];
};
var braceExpansionII = function (expression) {
    var _a = genSet(expression, -1), _ = _a[0], resultSet = _a[1];
    return Array.from(resultSet).sort();
};
// some test cases
console.log(braceExpansionII("{a,b}{c,{d,e}}")); // ["ac","ad","ae","bc","bd","be"]
console.log(braceExpansionII("{{a,z},a{b,c},{ab,z}}")); // ["a","ab","ac","z"]
