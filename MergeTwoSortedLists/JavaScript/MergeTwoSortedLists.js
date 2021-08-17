// Solution for: https://leetcode.com/problems/merge-two-sorted-lists/
// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
var mergeTwoLists = function (l1, l2) {
    var values = [];
    var node = l1;
    if (!l1 && !l2)
        return null;
    while (node) {
        values.push(node.val);
        node = node.next;
    }
    node = l2;
    while (node) {
        values.push(node.val);
        node = node.next;
    }
    values.sort(function (a, b) { return a - b; });
    var mergedNode = new ListNode(values[values.length - 1], null);
    for (var i = values.length - 2; i >= 0; i--) {
        var nextNode = new ListNode(values[i], mergedNode);
        mergedNode = nextNode;
    }
    return mergedNode;
};
var l1 = new ListNode(1, null);
var l2 = new ListNode(2, l1);
var l3 = new ListNode(4, l2);
var l4 = new ListNode(1, null);
var l5 = new ListNode(3, l4);
var l6 = new ListNode(4, l5);
var mergedLists = mergeTwoLists(l3, l6);
// some test cases
console.log(mergedLists); //
