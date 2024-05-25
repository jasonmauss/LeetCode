// Solution for: https://leetcode.com/problems/course-schedule-ii/description/


const findOrder = (numCourses: number, prerequisites: number[][]): number[] => {
    
    const numberMapGraph = new Map<number, number[]>();

    const inDegreeMap = new Map<number, number>();

    // Initialize both the number graph and in-degree map
    for (let i = 0; i < numCourses; i++) {
        numberMapGraph.set(i, []);
        inDegreeMap.set(i, 0);
    }

    for (let [course, prereq] of prerequisites) {
        numberMapGraph.get(prereq)!.push(course);
        inDegreeMap.set(course, inDegreeMap.get(course)! + 1);
    }

    const courseQueue: number[] = [];
    inDegreeMap.forEach((value, key) => {
        if (value === 0) {
            courseQueue.push(key);
        }
    });

    const courseOrder: number[] = [];

    while (courseQueue.length > 0) {
        const course = courseQueue.shift()!;
        courseOrder.push(course);

        for (const courseNeighbor of numberMapGraph.get(course)!) {

            inDegreeMap.set(courseNeighbor, inDegreeMap.get(courseNeighbor)! - 1);

            if (inDegreeMap.get(courseNeighbor)! === 0) {
                courseQueue.push(courseNeighbor);
            }

        }
    }

    return courseOrder.length === numCourses ? courseOrder : [];


};



// some test cases
console.log(findOrder(2, [[1,0]])); // [0,1]
console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]])); // [0,2,1,3]