// Solution for: https://leetcode.com/problems/distance-between-bus-stops/
var distanceBetweenBusStops = function (distance, start, destination) {
    var _a;
    // normalize the start and destination to always have the start being the lower number
    // swap the values if needed.
    if (start > destination)
        _a = [destination, start], start = _a[0], destination = _a[1];
    // sum the total distance of the entire route
    var totalDistance = distance.reduce(function (acc, cur) { return acc + cur; });
    // sum the distance of the route
    var routeDistance = distance.slice(start, destination).reduce(function (acc, cur) { return acc + cur; });
    // return the lesser between the distance of the route or the entire distance minus the route
    return Math.min(routeDistance, totalDistance - routeDistance);
};
// some test cases
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1)); // 1
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 2)); // 3
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 3)); // 4
