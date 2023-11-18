// Solution for: https://leetcode.com/problems/sort-list/

 /* Definition for singly-linked list. */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const sortList = (head: ListNode | null): ListNode | null => {
    return null;
};

// some tests
const nodes1 = new ListNode(4,
    new ListNode(2,
        new ListNode(1,
            new ListNode(3, null)
        )
    )
);
console.log(sortList(nodes1)); // [1, 2, 3, 4]

const nodes2 = new ListNode(-1,
    new ListNode(5,
        new ListNode(3,
            new ListNode(4,
                new ListNode(0, null)
            )
        )
    )
);
console.log(sortList(nodes2)); // [-1, 0, 3, 4, 5]