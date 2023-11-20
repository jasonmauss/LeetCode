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
    
    let nodesArray = [];

    let currentNode = head;
    while(currentNode) {
        nodesArray.push(currentNode.val);
        currentNode = currentNode.next;
    }

    nodesArray.sort((a,b) => b - a);

    currentNode = head;

    const setValue = (node: ListNode | null): void => {
        if(!node) return;
        node.val = nodesArray.pop();
        setValue(node.next);
    }

    setValue(head);

    return head;
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