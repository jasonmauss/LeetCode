// Solution for: https://leetcode.com/problems/merge-two-sorted-lists/


 // Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 

const mergeTwoLists = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {

    let values: number[] = [];
    let node: ListNode = l1;

    if(!l1 && !l2) return null;

    while(node) {
        values.push(node.val);
        node = node.next;
    }

    node = l2;

    while(node) {
        values.push(node.val);
        node = node.next;
    }

    values.sort((a, b) => a - b);

    let mergedNode: ListNode = new ListNode(values[values.length - 1], null);

    for(let i: number = values.length - 2; i >= 0; i--) {
        let nextNode = new ListNode(values[i], mergedNode);
        mergedNode = nextNode;
    }

    return mergedNode;
};

let l1: ListNode = new ListNode(1, null);
let l2: ListNode = new ListNode(2, l1);
let l3: ListNode = new ListNode(4, l2);

let l4: ListNode = new ListNode(1, null);
let l5: ListNode = new ListNode(3, l4);
let l6: ListNode = new ListNode(4, l5);

let mergedLists: ListNode = mergeTwoLists(l3, l6);

// some test cases
console.log(mergedLists); //