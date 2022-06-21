// Solution for: https://leetcode.com/problems/sequentially-ordinal-rank-tracker/
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());
var SORTracker = /** @class */ (function () {
    function SORTracker() {
        var _this = this;
        this.add = function (name, score) {
            _this.minQ.enqueue([score, name]);
            _this.maxQ.enqueue(_this.minQ.dequeue());
        };
        this.get = function () {
            var maxElement = _this.maxQ.dequeue();
            _this.minQ.enqueue(maxElement);
            return maxElement[1];
        };
        this.count = 0;
        this.minQ = new MinPriorityQueue(function (item) { return item.score; });
        this.maxQ = new MaxPriorityQueue(function (item) { return item.score; });
    }
    return SORTracker;
}());
/**
 * Your SORTracker object will be instantiated and called as such:
 * var obj = new SORTracker()
 * obj.add(name,score)
 * var param_2 = obj.get()
 */ 
