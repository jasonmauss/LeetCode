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
    if (head.val === 0 && head.next === null)
        return 0;
    let binaryString = '';
    let node = head;
    while (node !== null) {
        binaryString += node.val.toString();
        node = node.next;
    }
    return parseInt(binaryString, 2);
}
;
// some test cases
let ln1 = new ListNode(1, null);
let ln2 = new ListNode(0, ln1);
let ln3 = new ListNode(1, ln2);
console.log(getDecimalValue(ln3)); // 5
let ln4 = new ListNode(0, null);
console.log(getDecimalValue(ln4)); // 0
