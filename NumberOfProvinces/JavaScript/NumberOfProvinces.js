// Solution for: https://leetcode.com/problems/number-of-provinces/
var findCircleNum = function (isConnected) {
    var provinceCount = 0;
    var cityNumbers = new Set();
    var findCitiesConnectedTo = function (cityNumber) {
        for (var j = 0; j < isConnected.length; j++) {
            if (isConnected[cityNumber][j] === 1 && !cityNumbers.has(j)) {
                cityNumbers.add(j);
                findCitiesConnectedTo(j);
            }
        }
    };
    for (var i = 0; i < isConnected.length; i++) {
        if (!cityNumbers.has(i)) {
            provinceCount++;
            findCitiesConnectedTo(i);
        }
    }
    return provinceCount;
};
// some test cases
console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]])); // 2
console.log(findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]])); // 3
