// Solution for: https://leetcode.com/problems/goal-parser-interpretation/
const interpret = (command) => {
    while (command.indexOf('(al)') > -1) {
        command = command.replace('(al)', 'al');
    }
    while (command.indexOf('()') > -1) {
        command = command.replace('()', 'o');
    }
    return command;
};
// some test cases
console.log(interpret("G()(al)")); // "Goal"
console.log(interpret("G()()()()(al)")); // "Gooooal"
console.log(interpret("(al)G(al)()()G")); // "alGalooG"
