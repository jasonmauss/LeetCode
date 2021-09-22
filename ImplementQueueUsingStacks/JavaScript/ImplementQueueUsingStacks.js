// Solution for: https://leetcode.com/problems/implement-queue-using-stacks/
var MyQueue = /** @class */ (function () {
    function MyQueue() {
        this.items = [];
    }
    MyQueue.prototype.push = function (x) {
        this.items.push(x);
    };
    MyQueue.prototype.pop = function () {
        return this.items.shift();
    };
    MyQueue.prototype.peek = function () {
        return this.items[0];
    };
    MyQueue.prototype.empty = function () {
        return this.items.length === 0;
    };
    return MyQueue;
}());
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// some test cases
