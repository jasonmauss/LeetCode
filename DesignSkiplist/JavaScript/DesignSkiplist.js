var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Solution for: https://leetcode.com/problems/design-skiplist/
var NodeItem = /** @class */ (function () {
    function NodeItem(val) {
        this.val = val;
    }
    return NodeItem;
}());
var Skiplist = /** @class */ (function () {
    function Skiplist() {
        var _this = this;
        this.decideLevels = function (max) {
            var answer = 1;
            while (Math.random() > 0.5 && answer < max)
                answer++;
            return answer;
        };
        this.iter = function (target) {
            var current = _this.head;
            var pre = [];
            for (var i = _this.maxLevel - 1; i >= 0; i--) {
                while (current.next && current.next.val < target)
                    current = current.next;
                pre[i] = current;
                current = current.down;
            }
            return pre;
        };
        this.maxLevel = ~~Math.log2(20000);
        this.levels = __spreadArray([], Array(this.maxLevel), true).map(function () { return new NodeItem(-1); });
        for (var i = this.maxLevel - 1; i > 0; i--) {
            this.levels[i].down = this.levels[i - 1];
        }
        this.head = this.levels[this.maxLevel - 1];
    }
    Skiplist.prototype.search = function (target) {
        var pre = this.iter(target);
        return !pre[0].next ? false : pre[0].next.val === target;
    };
    Skiplist.prototype.add = function (num) {
        var pre = this.iter(num);
        var lvls = this.decideLevels(this.maxLevel);
        for (var i = 0; i < lvls; i++) {
            var next = pre[i].next;
            pre[i].next = new NodeItem(num);
            pre[i].next.next = next;
            if (i > 0)
                pre[i].next.down = pre[i - 1].next;
        }
    };
    Skiplist.prototype.erase = function (num) {
        var pre = this.iter(num);
        if (!pre[0].next || pre[0].next.val !== num)
            return false;
        for (var i = this.maxLevel - 1; i >= 0; i--) {
            if (pre[i].next && pre[i].next.val === num) {
                var targetedForDeletion = pre[i].next;
                pre[i].next = targetedForDeletion.next;
                targetedForDeletion.next = null;
                targetedForDeletion.down = null;
            }
        }
        return true;
    };
    return Skiplist;
}());
/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */
// some test cases
var skiplist = new Skiplist();
skiplist.add(1);
skiplist.add(2);
skiplist.add(3);
skiplist.search(0); // return False
skiplist.add(4);
skiplist.search(1); // return True
skiplist.erase(0); // return False, 0 is not in skiplist.
skiplist.erase(1); // return True
skiplist.search(1); // return False, 1 has already been erased.
