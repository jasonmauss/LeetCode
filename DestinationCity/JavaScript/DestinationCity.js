// Solution for: https://leetcode.com/problems/destination-city/
var destCity = function (paths) {
    var leftCity = [];
    var rightCity = [];
    paths.forEach(function (path) {
        leftCity.push(path[0]);
        rightCity.push(path[1]);
    });
    return rightCity.find(function (item) { return !leftCity.includes(item); }) || '';
};
// some test cases
console.log(destCity([["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]])); // Sao Paulo
console.log(destCity([["B", "C"], ["D", "B"], ["C", "A"]])); // A
console.log(destCity([["A", "Z"]])); // Z
