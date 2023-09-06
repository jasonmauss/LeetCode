// Solution for: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
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


const deleteDuplicates = (head: ListNode | null): ListNode | null => {

    return null;

};





// some test cases
let rootNode:ListNode = new ListNode(1,
    new ListNode(1,
        new ListNode(2, null)
    )
);

console.log(deleteDuplicates(rootNode)); // [1, 2]


rootNode = new ListNode(1,
    new ListNode(1,
        new ListNode(2,
            new ListNode(3,
                new ListNode(3, null)
            )
        )
    )
);

console.log(deleteDuplicates(rootNode)); // [1, 2, 3]