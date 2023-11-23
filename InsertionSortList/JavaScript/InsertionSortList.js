// Solution for: https://leetcode.com/problems/insertion-sort-list/
/* Definition for singly-linked list. */
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
var insertionSortList = function (head) {
    return null;
};
// some tests
var head1 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3, null))));
console.log(insertionSortList(head1)); // [1, 2, 3, 4]
var head2 = new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0, null)))));
console.log(insertionSortList(head2)); // [-1, 0, 3, 4, 5]
