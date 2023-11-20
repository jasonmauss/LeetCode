// Solution for: https://leetcode.com/problems/sort-list/
/* Definition for singly-linked list. */
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
var sortList = function (head) {
    var nodesArray = [];
    var currentNode = head;
    while (currentNode) {
        nodesArray.push(currentNode.val);
        currentNode = currentNode.next;
    }
    nodesArray.sort(function (a, b) { return b - a; });
    currentNode = head;
    var setValue = function (node) {
        if (!node)
            return;
        node.val = nodesArray.pop();
        setValue(node.next);
    };
    setValue(head);
    return head;
};
// some tests
var nodes1 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3, null))));
console.log(sortList(nodes1)); // [1, 2, 3, 4]
var nodes2 = new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0, null)))));
console.log(sortList(nodes2)); // [-1, 0, 3, 4, 5]
