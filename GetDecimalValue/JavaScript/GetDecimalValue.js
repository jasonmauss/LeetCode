// Solution for: https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function getDecimalValue(head) {
    return 0;
}
;
// some test cases
let ln1 = new ListNode(1, null);
let ln2 = new ListNode(0, ln1);
let ln3 = new ListNode(1, ln2);
console.log(getDecimalValue(ln3)); // 5
let ln4 = new ListNode(0, null);
console.log(getDecimalValue(ln4)); // 0
