// Solution for: https://leetcode.com/problems/palindrome-linked-list/
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


const isPalindrome = (head: ListNode | null): boolean => {

    return false;

};







// some test cases
let rootNode:ListNode = new ListNode(1,
    new ListNode(2,
        new ListNode(2,
            new ListNode(1, null)
        )
    )
);


console.log(isPalindrome(rootNode)); // true

rootNode = new ListNode(1,
    new ListNode(2, null
    )
);


console.log(isPalindrome(rootNode)); // false