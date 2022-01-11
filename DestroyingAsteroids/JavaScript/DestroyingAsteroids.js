// Solution for: https://leetcode.com/problems/destroying-asteroids/
var asteroidsDestroyed = function (mass, asteroids) {
    asteroids.sort(function (a, b) { return a - b; });
    for (var i = 0; i < asteroids.length; i++) {
        if (asteroids[i] <= mass) {
            mass += asteroids[i];
        }
        else {
            return false;
        }
    }
    return true;
};
// some test cases
console.log(asteroidsDestroyed(10, [3, 9, 19, 5, 21])); //  true
console.log(asteroidsDestroyed(5, [4, 9, 23, 4])); //  false
