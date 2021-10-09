// Solution for: https://leetcode.com/problems/last-stone-weight/
var lastStoneWeight = function (stones) {
    var canStillPlay = stones.length > 1;
    stones.sort(function (a, b) { return b - a; }); //O(n)
    console.log(stones);
    while (canStillPlay) { //O(logn)
        //get stones
        var stone1 = stones.shift(); //heaviest
        var stone2 = stones.shift();
        console.log("stone 1 is " + stone1);
        console.log("stone 2 is " + stone2);
        //smash them
        if (stone2 <= stone1) {
            if (stone1 === stone2) {
                console.log('INFO: both stones are destroyed!');
            }
            else {
                stone1 = stone1 - stone2;
                stones.push(stone1);
                stones.sort(function (a, b) { return b - a; }); //O(n)
                console.log('INFO: pushing back into stones array');
            }
        }
        canStillPlay = stones.length > 1;
    }
    return stones.length > 0 ? Math.min.apply(Math, stones) : 0;
};
// some test cases
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // 1
console.log(lastStoneWeight([1])); // 1
