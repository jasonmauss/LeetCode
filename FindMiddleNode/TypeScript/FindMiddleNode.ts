// Solution for: https://leetcode.com/problems/middle-of-the-linked-list/
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


const middleNode = (head: ListNode | null): ListNode | null => {

    return null;

};


// some test cases
let rootNode:ListNode = new ListNode(
    1, new ListNode(
        2, new ListNode(
            3, new ListNode(
                4, new ListNode(
                    5, null
                )
            )
        )
    )
)

console.log(middleNode(rootNode)); // [3,4,5]

let rootNode2:ListNode = new ListNode(
    1, new ListNode(
        2, new ListNode(
            3, new ListNode(
                4, new ListNode(
                    5, new ListNode(
                        6, null
                    )
                )
            )
        )
    )
)


console.log(middleNode(rootNode2)); // [4,5,6]