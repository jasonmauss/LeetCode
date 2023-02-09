// Solution for: https://leetcode.com/problems/design-an-ordered-stream/
class OrderedStream {
    constructor(n) {
    }
    insert(idKey, value) {
        return [''];
    }
}
/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
// some test cases
var obj = new OrderedStream(5);
var param_1 = obj.insert(3, 'ccccc');
var param_2 = obj.insert(1, 'aaaaa');
var param_3 = obj.insert(2, 'bbbbb');
var param_4 = obj.insert(5, 'eeeee');
var param_5 = obj.insert(4, 'ddddd');
console.log(param_1); // [null, [], ["aaaaa"], ["bbbbb", "ccccc"], [], ["ddddd", "eeeee"]]
console.log(param_2);
console.log(param_3);
console.log(param_4);
console.log(param_5);
