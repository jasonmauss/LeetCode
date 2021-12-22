var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// Solution for: https://leetcode.com/problems/finding-3-digit-even-numbers/
var findEvenNumbers = function (digits) {
    var nums = digits, digitCount = digits.length;
    var result = [];
    for (var i = 0; i < digitCount; i++)
        if (digits[i] !== 0)
            for (var j = 0; j < digitCount; j++)
                if (i !== j)
                    for (var k = 0; k < digitCount; k++)
                        if (i !== k && j !== k && digits[k] % 2 === 0) {
                            result.push(digits[i] * 100 + digits[j] * 10 + digits[k]);
                        }
    return __spreadArray([], __read(new Set(result.sort())));
};
// some test cases
console.log(findEvenNumbers([2, 1, 3, 0])); // [102,120,130,132,210,230,302,310,312,320]
console.log(findEvenNumbers([2, 2, 8, 8, 2])); // [222,228,282,288,822,828,882]
console.log(findEvenNumbers([3, 7, 5])); // []
// compile this with the --downlevelIteration flag on the TS compiler
