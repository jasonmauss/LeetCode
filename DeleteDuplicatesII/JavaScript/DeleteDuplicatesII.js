// Solution for: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
var deleteDuplicates = function (head) {
    if (!head)
        return null;
    if (!head.next)
        return head;
    if (head.val === head.next.val) {
        var duplicateValue = head.val;
        while (head !== null && head.val === duplicateValue) {
            head = head.next;
        }
        return deleteDuplicates(head);
    }
    return new ListNode(head.val, deleteDuplicates(head.next));
};
var Node1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5)))))));
// some test cases
console.log(deleteDuplicates(Node1)); // [1,2,5]
var Node2 = new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3)))));
// some test cases
console.log(deleteDuplicates(Node2)); // [2,3]
