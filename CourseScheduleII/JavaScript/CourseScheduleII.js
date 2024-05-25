// Solution for: https://leetcode.com/problems/course-schedule-ii/description/
var findOrder = function (numCourses, prerequisites) {
    var numberMapGraph = new Map();
    var inDegreeMap = new Map();
    // Initialize both the number graph and in-degree map
    for (var i = 0; i < numCourses; i++) {
        numberMapGraph.set(i, []);
        inDegreeMap.set(i, 0);
    }
    for (var _i = 0, prerequisites_1 = prerequisites; _i < prerequisites_1.length; _i++) {
        var _a = prerequisites_1[_i], course = _a[0], prereq = _a[1];
        numberMapGraph.get(prereq).push(course);
        inDegreeMap.set(course, inDegreeMap.get(course) + 1);
    }
    var courseQueue = [];
    inDegreeMap.forEach(function (value, key) {
        if (value === 0) {
            courseQueue.push(key);
        }
    });
    var courseOrder = [];
    while (courseQueue.length > 0) {
        var course = courseQueue.shift();
        courseOrder.push(course);
        for (var _b = 0, _c = numberMapGraph.get(course); _b < _c.length; _b++) {
            var courseNeighbor = _c[_b];
            inDegreeMap.set(courseNeighbor, inDegreeMap.get(courseNeighbor) - 1);
            if (inDegreeMap.get(courseNeighbor) === 0) {
                courseQueue.push(courseNeighbor);
            }
        }
    }
    return courseOrder.length === numCourses ? courseOrder : [];
};
// some test cases
console.log(findOrder(2, [[1, 0]])); // [0,1]
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])); // [0,2,1,3]
