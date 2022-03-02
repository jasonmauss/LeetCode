// Solution for: https://leetcode.com/problems/course-schedule-iv/
const checkIfPrerequisite = (numCourses, prerequisites, queries) => {
    const degree = Array.from({ length: numCourses }, () => 0);
    const adjG = Array.from({ length: numCourses }, () => []);
    for (const [F, L] of prerequisites) {
        degree[F]++;
        adjG[L].push(F);
    }
    const sets = Array.from({ length: numCourses }, () => new Set());
    for (let i = 0; i < numCourses; i++) {
        const start = degree.findIndex((deg) => deg === 0);
        if (start === -1)
            break;
        degree[start]--; // de-dup;
        for (const adj of adjG[start]) {
            degree[adj]--;
            sets[adj].add(start);
            for (const key of sets[start]) {
                sets[adj].add(key);
            }
        }
    }
    return queries.map(([p1, p2]) => sets[p1].has(p2));
};
// some test cases
console.log(checkIfPrerequisite(2, [[1, 0]], [[0, 1], [1, 0]])); // [false, true]
console.log(checkIfPrerequisite(2, [], [[1, 0], [0, 1]])); // [false, false]
