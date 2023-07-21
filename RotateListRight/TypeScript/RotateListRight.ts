// Solution for: https://leetcode.com/problems/rotate-list/
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


function rotateRight(head: ListNode | null, k: number): ListNode | null {

    return null;

};




// some test cases
const headNode1 = new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
                new ListNode(5, null)
            )
        )
    )
);
console.log(rotateRight(headNode1, 2)); 

const headNode2 = new ListNode(0,
    new ListNode(1,
        new ListNode(2)
            )
);
console.log(rotateRight(headNode2, 4)); 