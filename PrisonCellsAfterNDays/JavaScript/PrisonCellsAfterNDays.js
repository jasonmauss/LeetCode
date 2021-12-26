// Solution for: https://leetcode.com/problems/prison-cells-after-n-days/
var prisonAfterNDays = function (cells, n) {
    // Since n (number of days/cycles) can get rather large for this problem,
    // we will store a history of patterns so that we can use it later on
    // if/when the pattern repeats.
    var result = [], resultHistory = [];
    while (n--) {
        for (var i = 0; i < cells.length; i++) {
            if (cells[i - 1] === cells[i + 1]) {
                result[i] = 1;
            }
            else {
                result[i] = 0;
            }
        }
        cells = [];
        cells.push.apply(cells, result);
        var resultIndex = resultHistory.indexOf(cells.join(''));
        if (resultIndex != -1) {
            var indexMod = n % (resultHistory.length - resultIndex);
            return resultHistory[resultIndex + indexMod].split('');
        }
        resultHistory.push(cells.join(''));
    }
    return result;
};
// some test cases
console.log(prisonAfterNDays([0, 1, 0, 1, 1, 0, 0, 1], 7)); // [0,0,1,1,0,0,0,0]
console.log(prisonAfterNDays([1, 0, 0, 1, 0, 0, 1, 0], 1000000000)); // [0,0,1,1,1,1,1,0]
