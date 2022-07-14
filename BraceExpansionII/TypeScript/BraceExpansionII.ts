// Solution for: https://leetcode.com/problems/brace-expansion-ii/
const braceExpansionII = (expression: string): string[] => {

    return [''];

};



// some test cases
console.log(braceExpansionII("{a,b}{c,{d,e}}")); // ["ac","ad","ae","bc","bd","be"]
console.log(braceExpansionII("{{a,z},a{b,c},{ab,z}}")); // ["a","ab","ac","z"]