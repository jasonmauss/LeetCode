// Solution for: https://leetcode.com/problems/reverse-nodes-in-k-group/
// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
var reverseKGroup = function (head, k) {
    var currentNode = head;
    var values = [];
    var reversedValues = [];
    var valuesAdded = 0;
    while (currentNode !== null && currentNode.val !== undefined) {
        values.push(currentNode.val);
        valuesAdded++;
        currentNode = currentNode.next;
    }
    if (valuesAdded < k) {
        return head;
    }
    else {
        var currentValueSet = [];
        for (var i = 0; i < k && i < values.length; i++) {
            currentValueSet.push(values[i]);
            if (i === (k - 1)) {
                currentValueSet.reverse();
                reversedValues.push.apply(reversedValues, currentValueSet);
                currentValueSet = [];
                i = -1;
                values.splice(0, k);
            }
        }
        if (currentValueSet.length > 0) {
            reversedValues.push.apply(reversedValues, currentValueSet);
        }
    }
    var mergedNode = null;
    if (reversedValues.length > 0) {
        mergedNode = new ListNode(reversedValues[reversedValues.length - 1], null);
        for (var i = reversedValues.length - 2; i >= 0; i--) {
            var nextNode = new ListNode(reversedValues[i], mergedNode);
            mergedNode = nextNode;
        }
    }
    return mergedNode;
};
// some test cases
var l1 = new ListNode(5, null);
var l2 = new ListNode(4, l1);
var l3 = new ListNode(3, l2);
var l4 = new ListNode(2, l3);
var l5 = new ListNode(1, l4);
var mergedLists = reverseKGroup(l5, 2);
console.log(mergedLists);
