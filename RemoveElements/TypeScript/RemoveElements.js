// Solution for: https://leetcode.com/problems/remove-linked-list-elements/
/* Definition for singly-linked list. */
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
var removeElements = function (head, val) {
    if (head === null)
        return null;
    if (head.val === val)
        return removeElements(head.next, val);
    return (head.next = removeElements(head.next, val), head);
};
var node1 = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))));
// some test cases
console.log(removeElements(node1, 6)); // [1,2,3,4,5]
var node2 = new ListNode();
console.log(removeElements(node2, 1)); // []
var node3 = new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7))));
console.log(removeElements(node3, 7)); // []
