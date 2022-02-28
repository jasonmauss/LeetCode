// Solution for: https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
const removeZeroSumSublists = (head) => {
    return head;
};
// some test cases
let ln1 = new ListNode(1, null);
let ln2 = new ListNode(3, ln1);
let ln3 = new ListNode(-3, ln2);
let ln4 = new ListNode(2, ln3);
let ln5 = new ListNode(1, ln4);
console.log(removeZeroSumSublists(ln5)); // [3,1]
let ln6 = new ListNode(4, null);
let ln7 = new ListNode(-3, ln6);
let ln8 = new ListNode(3, ln7);
let ln9 = new ListNode(2, ln8);
let ln10 = new ListNode(1, ln9);
console.log(removeZeroSumSublists(ln10)); // [1,2,4]
let ln11 = new ListNode(1, null);
let ln12 = new ListNode(3, ln11);
let ln13 = new ListNode(-3, ln12);
let ln14 = new ListNode(2, ln13);
let ln15 = new ListNode(1, ln14);
console.log(removeZeroSumSublists(ln15)); // [1]
