// Solution for: https://leetcode.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const reverseList = (head: ListNode | null): ListNode | null => {

    let previousNode: ListNode | null = null;

    while(head) {
        previousNode = new ListNode(head.val, previousNode);
        head = head.next;
    }

    return previousNode;

};



const rootNode:ListNode = new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
                new ListNode(5, null)
            )
        )
    )
);

// some test cases
console.log(reverseList(rootNode)); // [5,4,3,2,1]



const rootNode2:ListNode = new ListNode(1,
    new ListNode(2, null)
);

console.log(reverseList(rootNode2)); // [2, 1]