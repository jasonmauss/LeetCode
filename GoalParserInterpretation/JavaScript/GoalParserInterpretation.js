// Solution for: https://leetcode.com/problems/goal-parser-interpretation/
const interpret = (command) => {
    return '';
};
// some test cases
console.log(interpret("G()(al)")); // "Goal"
console.log(interpret("G()()()()(al)")); // "Gooooal"
console.log(interpret("(al)G(al)()()G")); // "alGalooG"
