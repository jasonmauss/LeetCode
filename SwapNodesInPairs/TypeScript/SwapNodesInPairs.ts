// Solution for: https://leetcode.com/problems/swap-nodes-in-pairs/

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

 const swapPairs = (head: ListNode | null): ListNode | null => {

    if(head === null) return null;

    if(head.next === null) return head;

    let values: number[] = [];

    let currentNode = head;

    while(currentNode.next !== null) {
        if(currentNode.next.val != null) {
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
        } else {
            break;
        }
    }

    let mergedNode: ListNode = null;

    if(values.length > 0) {
        mergedNode = new ListNode(values[values.length - 1], null);

        for(let i: number = values.length - 2; i >= 0; i--) {
            let nextNode = new ListNode(values[i], mergedNode);
            mergedNode = nextNode;
        }
    }    

    return mergedNode;

};

// some test cases
let l7: ListNode = new ListNode(4, null);
let l8: ListNode = new ListNode(3, l7);
let l9: ListNode = new ListNode(2, l8);
let l10: ListNode = new ListNode(1, l9);

let mergedLists: ListNode = swapPairs(l10);