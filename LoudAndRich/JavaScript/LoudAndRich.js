// Solution for: https://leetcode.com/problems/loud-and-rich/
var LoudAndRichNode = /** @class */ (function () {
    function LoudAndRichNode(position, quiet) {
        this.position = position;
        this.quiet = quiet;
        this.quietestNode = null;
        this.richerNodes = [];
    }
    LoudAndRichNode.prototype.getLeastQuietNode = function () {
        if (!this.quietestNode) {
            this.quietestNode = this;
            for (var _i = 0, _a = this.richerNodes; _i < _a.length; _i++) {
                var n = _a[_i];
                var lqn = n.getLeastQuietNode();
                if (lqn.quiet < this.quietestNode.quiet)
                    this.quietestNode = lqn;
            }
        }
        return this.quietestNode;
    };
    return LoudAndRichNode;
}());
var loudAndRich = function (richer, quiet) {
    var n = quiet.length;
    var lrNodes = new Array(n);
    for (var i = 0; i < n; i++) {
        lrNodes[i] = new LoudAndRichNode(i, quiet[i]);
    }
    richer.forEach(function (_a) {
        var x = _a[0], y = _a[1];
        lrNodes[y].richerNodes.push(lrNodes[x]);
    });
    return lrNodes.map(function (n) { return n.getLeastQuietNode().position; });
};
// some test cases
console.log(loudAndRich([[1, 0], [2, 1], [3, 1], [3, 7], [4, 3], [5, 3], [6, 3]], [3, 2, 5, 4, 6, 1, 7, 0])); // [5,5,2,5,4,5,6,7]
console.log(loudAndRich([], [0])); // [0]
