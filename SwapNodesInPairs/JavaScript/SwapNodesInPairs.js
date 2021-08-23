// Solution for: https://leetcode.com/problems/swap-nodes-in-pairs/
// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
var swapPairs = function (head) {
    if (head === null)
        return null;
    if (head.next === null)
        return head;
    var values = [];
    var currentNode = head;
    while (currentNode.next !== null) {
        if (currentNode.next.val != null) {
            values.push(currentNode.next.val);
        }
        values.push(currentNode.val);
        if (currentNode.next.next != null) {
            if (currentNode.next.next.next != null) {
                currentNode = currentNode.next.next;
            }
            else {
                values.push(currentNode.next.next.val);
                break;
            }
        }
        else {
            break;
        }
    }
    var mergedNode = null;
    if (values.length > 0) {
        mergedNode = new ListNode(values[values.length - 1], null);
        for (var i = values.length - 2; i >= 0; i--) {
            var nextNode = new ListNode(values[i], mergedNode);
            mergedNode = nextNode;
        }
    }
    return mergedNode;
};
// some test cases
var l7 = new ListNode(4, null);
var l8 = new ListNode(3, l7);
var l9 = new ListNode(2, l8);
var l10 = new ListNode(1, l9);
var mergedLists = swapPairs(l10);
