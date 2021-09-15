// Solution for: https://leetcode.com/problems/isomorphic-strings/
var isIsomorphic = function (s, t) {
    var mapSet = new Set();
    var replacingSet = new Set();
    var replacedSet = new Set();
    var sArray = s.split('');
    var tArray = t.split('');
    for (var i = 0; i < sArray.length; i++) {
        var key = sArray[i] + " : " + tArray[i];
        //let key2:string = `${tArray[i]} : ${sArray[i]}`;
        if (replacingSet.has(sArray[i])) {
            if (!mapSet.has(key)) { // || !mapSet.has(key2)) {
                return false;
            }
        }
        else {
            if (replacedSet.has(tArray[i]))
                return false;
            replacingSet.add(sArray[i]);
            replacedSet.add(tArray[i]);
            mapSet.add(key);
            //mapSet.add(key2);
        }
    }
    return true;
};
// some test cases
console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
console.log(isIsomorphic('paper', 'tille')); // false
console.log(isIsomorphic('badc', 'baba')); // false
