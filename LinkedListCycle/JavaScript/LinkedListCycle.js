// Solution for: https://leetcode.com/problems/linked-list-cycle/
/**
 * Definition for singly-linked list.
 */
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function hasCycle(head) {
    if (head === null || head.next === null)
        return false;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast)
            return true;
    }
    return false;
}
;
// some test cases
let node3 = new ListNode(0);
let node2 = new ListNode(2, node3);
let node4 = new ListNode(-4, node2);
let rootNode1 = new ListNode(3, node2);
node3.next = node4;
console.log(hasCycle(rootNode1)); // true
node2 = new ListNode(2);
let node1 = new ListNode(1);
node1.next = node2;
node2.next = node1;
console.log(hasCycle(node1)); // true
node1 = new ListNode(1);
console.log(hasCycle(node1)); // false
