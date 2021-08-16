// Solution for: https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }


const removeNthFromEnd = (head: ListNode | null, n: number): ListNode | null => {

    // case of there being a single element
    if(!head.next) return null;

    // keep two lists and an array that acts as a buffer and allows
    // for delaying the list accumulation by N steps (the second argument)
    let currentNode: ListNode = head;
    let depth: number = 0;

    while(currentNode) {
        currentNode = currentNode.next;
        depth++;
    }

    if(depth === n) {
        // just remove head
        return head.next;
    }

    // once you get to the nth element, skip it
    currentNode = head;
    for(let i: number = 0; i < depth - n - 1; i++) {
        currentNode = currentNode.next;
    }

    currentNode.next = currentNode.next.next;
    
    return head;
};

// some test cases
let l1: ListNode = new ListNode(5, null);
let l2: ListNode = new ListNode(4, l1);
let l3: ListNode = new ListNode(3, l2);
let l4: ListNode = new ListNode(2, l3);
let l5: ListNode = new ListNode(1, l4);
console.log(removeNthFromEnd(l5, 2)); 

let l6: ListNode = new ListNode(1, null);
console.log(removeNthFromEnd(l6, 1)); 

let l7: ListNode = new ListNode(2, null);
let l8: ListNode = new ListNode(1, l7);
console.log(removeNthFromEnd(l8, 1));