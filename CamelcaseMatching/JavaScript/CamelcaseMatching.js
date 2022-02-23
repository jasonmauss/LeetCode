// Solution for: https://leetcode.com/problems/camelcase-matching/
const camelMatch = (queries, pattern) => {
    const patternLength = pattern.length;
    return queries.map((query) => {
        let match = 0;
        for (let q of query) {
            if (pattern[match] === q) {
                match++;
            }
            else if (q === q.toUpperCase()) {
                return false;
            }
        }
        return match === patternLength;
    });
};
// some test cases
console.log(camelMatch(["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"], "FB")); // [true, false, true, true, false]
console.log(camelMatch(["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"], "FoBa")); // [true, false, true, false, false]
console.log(camelMatch(["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"], "FoBaT")); // [false, true, false, false, false]
