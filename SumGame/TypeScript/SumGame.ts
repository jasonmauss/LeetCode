// Solution for: https://leetcode.com/problems/sum-game/
const sumGame = (num: string): boolean => {

    const middle = num.length / 2;

    var numArray = num.split('');

    let diff = 0;
    let turns = 0;

    for (let i = 0; i < middle; i += 1) {
        if (num[i] === '?') {
            turns -= 1;
        } else {
            diff += parseInt(numArray[i]) - 0;
        }
    }

    for (let i = middle; i < num.length; i += 1) {
        if (num[i] === '?') {
            turns += 1;
        } else {
            diff -= parseInt(numArray[i]) - 0;
        }
    }

    return diff !== turns * 4.5;
};



// some test cases
console.log(sumGame("5023")); // false
console.log(sumGame("25??")); // true
console.log(sumGame("?3295???")); // false
