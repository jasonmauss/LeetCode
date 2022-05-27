// Solution for: https://leetcode.com/problems/edit-distance/
// Get the char at a specific index, or undefined if the index doesn't exist.
const char = (s, inx) => (inx < 0 || inx + 1 > s.length ? undefined : s[inx]);
// Replace a char at a specific index.
const replaceChar = (i) => i.s.slice(0, i.inx) + i.char + i.s.slice(i.inx + 1);
// Insert a char at a specific index; can append a char too.
const insertChar = (i) => i.s.slice(0, i.inx) + i.char + i.s.slice(i.inx);
// Deletes the char at a specific index.
const deleteChar = (i) => i.s.slice(0, i.inx) + i.s.slice(i.inx + 1);
// Calculates the first mismatch between two strings. Returns the index and the
// actual and required characters.
const mismatch = (i) => {
    const maxInx = Math.max(i.start.length, i.goal.length) - 1;
    for (let j = 0; j <= maxInx; j++) {
        const required = char(i.goal, j);
        const actual = char(i.start, j);
        if (required !== actual)
            return { inx: j, required: required, actual: actual };
    }
    return undefined;
};
// Given a start string and a goal, returns reasonable 1-step edits. This is
// done by calculating the first mismatch and figuring out the edits that help fix that
// problem at that position in the string. For example, if the first mismatch shows a
// required character "X" at index 3, then this can be solved by inserting an "X", replacing
// the current character with an "X", or deleting the current character but only if if an
// "X" appears somewhere later in the string.
function* nextEdit(i) {
    const m = mismatch(i);
    if (m !== undefined) {
        // replace
        if (m.required !== undefined && m.actual !== undefined)
            yield replaceChar({ s: i.start, inx: m.inx, char: m.required });
        // delete
        if (m.required !== undefined && i.start.includes(m.required, m.inx))
            yield deleteChar({ s: i.start, inx: m.inx });
        if (m.required === undefined && m.actual !== undefined)
            yield deleteChar({ s: i.start, inx: m.inx });
        // insert
        if (m.required !== undefined)
            yield insertChar({ s: i.start, inx: m.inx, char: m.required });
    }
}
// Recursively calculates in breadth-first fashion the minimum steps required to transform
// the start strings to the goal. Starts with a set of strings that need to be edited.
// For each such string, applies all 1-step edits. If the goal is reached, the answer is returned.
// But if not, the same function is called using the newly created strings. The strings that
// have been seen/processed before are ignored to avoid cycles and unnecessary processing.
const solve = (i) => {
    let afterEdit = new Set();
    for (const start of i.start) {
        for (const edited of nextEdit({ start: start, goal: i.goal })) {
            if (edited === i.goal) {
                return i.steps;
            }
            else if (!i.seen.has(edited)) {
                i.seen.add(edited);
                afterEdit.add(edited);
            }
        }
    }
    return solve({ start: afterEdit, goal: i.goal, seen: i.seen, steps: i.steps + 1 });
};
const minDistance = (start, goal) => {
    if (start === goal)
        return 0;
    return solve({
        start: new Set([start]),
        goal: goal,
        seen: new Set(),
        steps: 1,
    });
};
// some test cases
console.log(minDistance('horse', 'ros')); // 3
console.log(minDistance('intention', 'execution')); // 5
