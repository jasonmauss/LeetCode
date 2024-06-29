// Solution for: https://leetcode.com/problems/remove-linked-list-elements/


/* Definition for singly-linked list. */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


const removeElements = (head: ListNode | null, val: number): ListNode | null => {
    if(head === null) return null;
    if(head.val === val) return removeElements(head.next, val);
    return (head.next = removeElements(head.next, val), head);
};

const node1:ListNode = new ListNode(1,
    new ListNode(2,
        new ListNode(6,
            new ListNode(3,
                new ListNode(4,
                    new ListNode(5,
                        new ListNode(6)
                    )
                )
            )
        )
    )
)

// some test cases
console.log(removeElements(node1, 6 )); // [1,2,3,4,5]

const node2:ListNode = new ListNode();

console.log(removeElements(node2, 1)); // []

const node3:ListNode = new ListNode(7,
    new ListNode(7,
        new ListNode(7,
            new ListNode(7)
        )
    )
)
console.log(removeElements(node3, 7)); // []