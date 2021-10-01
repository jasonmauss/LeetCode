// Solution for: https://leetcode.com/problems/distance-between-bus-stops/
const distanceBetweenBusStops = (distance: number[], start: number, destination: number): number => {

    // normalize the start and destination to always have the start being the lower number
    // swap the values if needed.
    if(start > destination) [ start, destination ] = [destination, start];

    // sum the total distance of the entire route
    const totalDistance = distance.reduce((acc, cur) => acc + cur);

    // sum the distance of the route
    const routeDistance = distance.slice(start, destination).reduce((acc, cur) => acc + cur);

    // return the lesser between the distance of the route or the entire distance minus the route
    return Math.min(routeDistance, totalDistance - routeDistance);
};


// some test cases
console.log(distanceBetweenBusStops([1,2,3,4], 0, 1)); // 1
console.log(distanceBetweenBusStops([1,2,3,4], 0, 2)); // 3
console.log(distanceBetweenBusStops([1,2,3,4], 0, 3)); // 4