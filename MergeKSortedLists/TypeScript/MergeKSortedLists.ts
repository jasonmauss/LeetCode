// Solution for: https://leetcode.com/problems/merge-k-sorted-lists/

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {

    let currentNode: ListNode = null;
    let values: number[] = [];

    if(lists.length === 0) return null;

    for(let i: number = 0; i < lists.length; i++) {
        currentNode = lists[i];
        if(currentNode) {
            while(currentNode.next) {
                values.push(currentNode.val);
                currentNode = currentNode.next;
            }
            values.push(currentNode.val);
        }
    }

    values.sort((a, b) => a - b);

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
let testValues: ListNode[] = [];

// some test cases
let l1: ListNode = new ListNode(5, null);
let l2: ListNode = new ListNode(4, l1);
let l3: ListNode = new ListNode(1, l2);

testValues.push(l3);

let l4: ListNode = new ListNode(4, null);
let l5: ListNode = new ListNode(3, l4);
let l6: ListNode = new ListNode(1, l5);

testValues.push(l6);

let l7: ListNode = new ListNode(6, null);
let l8: ListNode = new ListNode(2, l7);

testValues.push(l8);

let mergedLists: ListNode = mergeKLists(testValues);

// some test cases
console.log(mergedLists); //

let testValues2: ListNode[] = [];
let l9: ListNode = null;

testValues2.push(l9);

let mergedLists2: ListNode = mergeKLists(testValues2);

console.log(mergedLists2);