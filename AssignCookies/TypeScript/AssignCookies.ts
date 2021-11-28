// Solution for: https://leetcode.com/problems/assign-cookies/
const findContentChildren = (g: number[], s: number[]): number => {

    g.sort(function(a, b) { return a - b});
    s.sort(function (a, b) { return a - b });

    var i:number = 0;

    s.forEach((element) => { 
        if (element >= g[i]) { 
            i++;
        }
    });

    return i;

};


// some test cases
console.log(findContentChildren([1,2,3], [1,1])); // 1
console.log(findContentChildren([1,2], [1,2,3])); // 2