// Solution for: https://leetcode.com/problems/implement-queue-using-stacks/
class MyQueue {

    items: number[] = [];

    constructor() {

    }

    push(x: number): void {
        this.items.push(x);
    }

    pop(): number {
        return this.items.shift();
    }

    peek(): number {
        return this.items[0];
    }

    empty(): boolean {
        return this.items.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// some test cases
