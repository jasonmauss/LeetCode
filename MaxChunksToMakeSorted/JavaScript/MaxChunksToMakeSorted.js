// Solution for: https://leetcode.com/problems/max-chunks-to-make-sorted/
var maxChunksToSorted = function (arr) {
    var chunks = 0;
    var gaps = 0;
    var notHoles = 0;
    var lastHoleIndex = -1;
    for (var i = 0; i < arr.length; ++i) {
        gaps++;
        var holeIndex = arr[i];
        lastHoleIndex = Math.max(holeIndex, lastHoleIndex);
        notHoles = lastHoleIndex + 1 - gaps;
        if (notHoles === 0)
            chunks++;
    }
    return chunks;
};
// some test cases
console.log(maxChunksToSorted([4, 3, 2, 1, 0])); // 1
console.log(maxChunksToSorted([1, 0, 2, 3, 4])); // 4
