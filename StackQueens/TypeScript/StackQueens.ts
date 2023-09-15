// Solution for: https://leetcode.com/problems/implement-stack-using-queues/
class MyStack {

    queue:number[];

    constructor() {
        this.queue = [];
    }

    push(x: number): void {
        this.queue.push(x);
    }

    pop(): number {
        return this.queue.pop();
    }

    top(): number {
        return this.queue[this.queue.length - 1];
    }

    empty(): boolean {
        return this.queue.length === 0;
    }
}

// some test cases
/**
 * Your MyStack object will be instantiated and called as such:
 */
let obj:MyStack = new MyStack()
obj.push(1);
obj.push(2);
var param_2 = obj.top();
console.log(param_2); // 2
var param_3 = obj.pop();
console.log(param_3); // 2
var param_4 = obj.empty();
console.log(param_4); // false






