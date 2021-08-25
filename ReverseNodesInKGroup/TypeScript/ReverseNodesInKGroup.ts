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


    let currentNode: ListNode = head;
    let values: number[] = [];
    let reversedValues: number[] = [];
    let valuesAdded: number = 0;

    while(currentNode !== null && currentNode.val !== undefined) {
        values.push(currentNode.val);
        valuesAdded++;
        currentNode = currentNode.next;
    }

    if(valuesAdded < k) {
        return head;
    } else {
        let currentValueSet: number[] = [];
        for(let i:number = 0; i < k && i < values.length; i++) {
            currentValueSet.push(values[i]);
            if(i === (k - 1)) {
                currentValueSet.reverse();
                reversedValues.push(...currentValueSet);
                currentValueSet = [];
                i = -1;
                values.splice(0, k);
            }
        }

        if(currentValueSet.length > 0) {
            reversedValues.push(...currentValueSet);
        }
    }

    let mergedNode: ListNode = null;

    if(reversedValues.length > 0) {
        mergedNode = new ListNode(reversedValues[reversedValues.length - 1], null);

        for(let i: number = reversedValues.length - 2; i >= 0; i--) {
            let nextNode = new ListNode(reversedValues[i], mergedNode);
            mergedNode = nextNode;
        }
    }

    return mergedNode;
};

// some test cases
let l1: ListNode = new ListNode(5, null);
let l2: ListNode = new ListNode(4, l1);
let l3: ListNode = new ListNode(3, l2);
let l4: ListNode = new ListNode(2, l3);
let l5: ListNode = new ListNode(1, l4);

let mergedLists: ListNode = reverseKGroup(l5, 2);

console.log(mergedLists);