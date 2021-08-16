// Solution for: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
var removeNthFromEnd = function (head, n) {
    // case of there being a single element
    if (!head.next)
        return null;
    // keep two lists and an array that acts as a buffer and allows
    // for delaying the list accumulation by N steps (the second argument)
    var currentNode = head;
    var depth = 0;
    while (currentNode) {
        currentNode = currentNode.next;
        depth++;
    }
    if (depth === n) {
        // just remove head
        return head.next;
    }
    // once you get to the nth element, skip it
    currentNode = head;
    for (var i = 0; i < depth - n - 1; i++) {
        currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;
    return head;
};
// some test cases
var l1 = new ListNode(5, null);
var l2 = new ListNode(4, l1);
var l3 = new ListNode(3, l2);
var l4 = new ListNode(2, l3);
var l5 = new ListNode(1, l4);
console.log(removeNthFromEnd(l5, 2));
var l6 = new ListNode(1, null);
console.log(removeNthFromEnd(l6, 1));
var l7 = new ListNode(2, null);
var l8 = new ListNode(1, l7);
console.log(removeNthFromEnd(l8, 1));
