// Solution for: https://leetcode.com/problems/merge-k-sorted-lists/
// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
var mergeKLists = function (lists) {
    var currentNode = null;
    var values = [];
    if (lists.length === 0)
        return null;
    for (var i = 0; i < lists.length; i++) {
        currentNode = lists[i];
        if (currentNode) {
            while (currentNode.next) {
                values.push(currentNode.val);
                currentNode = currentNode.next;
            }
            values.push(currentNode.val);
        }
    }
    values.sort(function (a, b) { return a - b; });
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
var testValues = [];
// some test cases
var l1 = new ListNode(5, null);
var l2 = new ListNode(4, l1);
var l3 = new ListNode(1, l2);
testValues.push(l3);
var l4 = new ListNode(4, null);
var l5 = new ListNode(3, l4);
var l6 = new ListNode(1, l5);
testValues.push(l6);
var l7 = new ListNode(6, null);
var l8 = new ListNode(2, l7);
testValues.push(l8);
var mergedLists = mergeKLists(testValues);
// some test cases
console.log(mergedLists); //
var testValues2 = [];
var l9 = null;
testValues2.push(l9);
var mergedLists2 = mergeKLists(testValues2);
console.log(mergedLists2);
