// Solution for: https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


 const removeZeroSumSublists = (head: ListNode | null): ListNode | null => {

    return head;
};



// some test cases
let ln1:ListNode = new ListNode(1, null);
let ln2:ListNode = new ListNode(3, ln1);
let ln3:ListNode = new ListNode(-3, ln2);
let ln4:ListNode = new ListNode(2, ln3);
let ln5:ListNode = new ListNode(1, ln4);
console.log(removeZeroSumSublists(ln5)); // [3,1]

let ln6:ListNode = new ListNode(4, null);
let ln7:ListNode = new ListNode(-3, ln6);
let ln8:ListNode = new ListNode(3, ln7);
let ln9:ListNode = new ListNode(2, ln8);
let ln10:ListNode = new ListNode(1, ln9);
console.log(removeZeroSumSublists(ln10)); // [1,2,4]

let ln11:ListNode = new ListNode(1, null);
let ln12:ListNode = new ListNode(3, ln11);
let ln13:ListNode = new ListNode(-3, ln12);
let ln14:ListNode = new ListNode(2, ln13);
let ln15:ListNode = new ListNode(1, ln14);
console.log(removeZeroSumSublists(ln15)); // [1]