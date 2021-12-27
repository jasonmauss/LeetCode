var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
// Solution for: https://leetcode.com/problems/most-beautiful-item-for-each-query/
function maximumBeauty(items, queries) {
    var e_1, _a, e_2, _b;
    var result = new Array(queries.length).fill(0);
    // since there could be a huge range of items, let's sort them
    // and then we can just deal with items that are at least
    // in the range of min to max of the `queries` numbers.
    items.sort(function (a, b) { return (a[0] - b[0]) || (a[1] - b[1]); });
    var beautyMap = new Map();
    var max = 0;
    try {
        for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
            var _c = __read(items_1_1.value, 2), price = _c[0], beauty = _c[1];
            max = Math.max(max, beauty);
            beautyMap.set(price, max);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (items_1_1 && !items_1_1.done && (_a = items_1["return"])) _a.call(items_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var beautyKeys = Array.from(beautyMap.keys());
    try {
        for (var _d = __values(queries.entries()), _e = _d.next(); !_e.done; _e = _d.next()) {
            var _f = __read(_e.value, 2), index = _f[0], query = _f[1];
            var min = 0;
            var max_1 = beautyKeys.length - 1;
            while (min < max_1) {
                var mid = min + Math.ceil((max_1 - min + 1) / 2);
                if (beautyKeys[mid] <= query) {
                    min = mid;
                }
                else {
                    max_1 = mid - 1;
                }
            }
            if (beautyKeys[min] <= query) {
                result[index] = beautyMap.get(beautyKeys[min]);
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_b = _d["return"])) _b.call(_d);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return result;
}
;
// some test cases
console.log(maximumBeauty([[1, 2], [3, 2], [2, 4], [7, 6], [7, 5]], [1, 2, 3, 4, 5, 6])); // [2,4,4,4,4,4]
console.log(maximumBeauty([[1, 2], [3, 2], [2, 4], [5, 6], [3, 5]], [1, 2, 3, 4, 5, 6])); // [2,4,5,5,6,6]
console.log(maximumBeauty([[1, 2], [1, 2], [1, 3], [1, 4]], [1])); // [4]
console.log(maximumBeauty([[10, 1000]], [5])); // [0]
