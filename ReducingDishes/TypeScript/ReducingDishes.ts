// Solution for: https://leetcode.com/problems/reducing-dishes/
const maxSatisfaction = (satisfaction: number[]): number => {

    satisfaction.sort((a, b) => b - a);

    let output: number = 0;
    let t: number = 0;

    for (let i = 0; i < satisfaction.length; i++) {
        t += satisfaction[i];
        if (t > 0) output += t;
    }

    return output;

};


// some test cases
console.log(maxSatisfaction([-1,-8,0,5,-9])); // 14
console.log(maxSatisfaction([4,3,2])); // 20
console.log(maxSatisfaction([-1,-4,-5])); // 0