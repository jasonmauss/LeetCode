// Solution for: https://leetcode.com/problems/reverse-nodes-in-k-group/

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const reverseKGroup = (head: ListNode | null, k: number): ListNode | null => {

    return null;
};