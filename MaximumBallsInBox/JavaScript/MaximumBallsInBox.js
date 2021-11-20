// Solution for: https://leetcode.com/problems/maximum-number-of-balls-in-a-box/
var countBalls = function (lowLimit, highLimit) {
    var boxes = new Map();
    for (var i = lowLimit; i <= highLimit; i++) {
        var boxNumber = getBoxNumberFromBallNumber(i);
        var box = boxes.get(boxNumber);
        if (box) {
            boxes.set(boxNumber, box + 1);
        }
        else {
            boxes.set(boxNumber, 1);
        }
    }
    return Math.max.apply(Math, Array.from(boxes.values()));
};
var getBoxNumberFromBallNumber = function (value) {
    var boxNumber = 0;
    while (value > 0) {
        boxNumber += value % 10;
        value /= 10;
        value = value | 0;
    }
    return boxNumber;
};
// some test cases
console.log(countBalls(1, 10)); //  2
console.log(countBalls(5, 15)); //  2
console.log(countBalls(19, 28)); //  2
