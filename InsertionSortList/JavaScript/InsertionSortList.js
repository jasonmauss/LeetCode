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
    if (!head)
        return null;
    if (!head.next)
        return head;
    var output = head;
    var curr = head.next;
    head.next = null;
    while (curr) {
        var next = curr.next;
        var insertion = curr;
        output = insert(output, insertion);
        curr = next;
    }
    return output;
};
function insert(head, other) {
    var curr = head;
    var val = other.val;
    if (val <= head.val) {
        other.next = head;
        return other;
    }
    while (curr) {
        if ((val > curr.val && curr.next && val <= curr.next.val) || !curr.next) {
            other.next = curr.next;
            curr.next = other;
            return head;
        }
        curr = curr.next;
    }
    return head;
}
// some tests
var head1 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3, null))));
console.log(insertionSortList(head1)); // [1, 2, 3, 4]
var head2 = new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0, null)))));
console.log(insertionSortList(head2)); // [-1, 0, 3, 4, 5]
