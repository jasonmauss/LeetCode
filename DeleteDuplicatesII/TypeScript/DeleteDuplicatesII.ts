// Solution for: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/


// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


const deleteDuplicates = (head: ListNode | null): ListNode | null => {
    
    if(!head) return null;
    if(!head.next) return head;

    if(head.val === head.next.val) {
        const duplicateValue = head.val;
        while(head !== null && head.val === duplicateValue) {
            head = head.next;
        }
        return deleteDuplicates(head);
    }

    return new ListNode(head.val, deleteDuplicates(head.next));

};


const Node1 = new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(3,
                new ListNode(4,
                    new ListNode(4,
                        new ListNode(5)
                    )
                )
            )
        )
    )
);

// some test cases
console.log(deleteDuplicates(Node1)); // [1,2,5]

const Node2 = new ListNode(1,
    new ListNode(1,
        new ListNode(1,
            new ListNode(2,
                new ListNode(3)
            )
        )
    )
);

// some test cases
console.log(deleteDuplicates(Node2)); // [2,3]