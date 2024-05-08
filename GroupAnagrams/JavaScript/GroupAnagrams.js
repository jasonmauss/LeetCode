// Solution for: https://leetcode.com/problems/group-anagrams
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
var groupAnagrams = function (strs) {
    var e_1, _a, e_2, _b;
    var strsMap = new Map();
    try {
        for (var strs_1 = __values(strs), strs_1_1 = strs_1.next(); !strs_1_1.done; strs_1_1 = strs_1.next()) {
            var str = strs_1_1.value;
            var sortedStr = str.split('').sort().join('');
            var values = strsMap.get(sortedStr) || [];
            strsMap.set(sortedStr, values.concat(str));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (strs_1_1 && !strs_1_1.done && (_a = strs_1.return)) _a.call(strs_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var result = [];
    try {
        for (var strsMap_1 = __values(strsMap), strsMap_1_1 = strsMap_1.next(); !strsMap_1_1.done; strsMap_1_1 = strsMap_1.next()) {
            var _c = __read(strsMap_1_1.value, 2), _ = _c[0], value = _c[1];
            result.push(value);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (strsMap_1_1 && !strsMap_1_1.done && (_b = strsMap_1.return)) _b.call(strsMap_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return result;
};
// some test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]
