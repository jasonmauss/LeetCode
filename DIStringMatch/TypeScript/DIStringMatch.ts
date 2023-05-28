// Solution for: https://leetcode.com/problems/di-string-match/
const diStringMatch = (s: string): number[] => {

    const result = [];

    let lastValue = 0;
    let firstValue = 0;

    for(let i = 0; i <= s.length; i++) {
        switch(s[i]) {
            case "D":
                result.push(s.length - lastValue++);
                break;
            case "I":
                result.push(firstValue++);
                break;
            default:
                if(s[i-1] === "D") result.push(s.length - lastValue);
                if(s[i-1] === "I") result.push(firstValue);
                break;
        }
    }

    return result;

};









// some test cases
console.log(diStringMatch("IDID")); // [0,4,1,3,2]
console.log(diStringMatch("III")); // [0,1,2,3]
console.log(diStringMatch("DDI")); // [3,2,0,1]