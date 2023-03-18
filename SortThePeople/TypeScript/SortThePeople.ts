// Solution for: https://leetcode.com/problems/sort-the-people/
const sortPeople = (names: string[], heights: number[]): string[] => {

    let sortedPeople = [];

    // put the two types of data together into a single array
    for(let heightIndex in heights) {
        sortedPeople.push( {name: names[heightIndex], height: heights[heightIndex]});
    }

    return sortedPeople.sort((a, b) => b.height - a.height).map(h => h.name);

};





// some test cases
console.log(sortPeople(["Mary","John","Emma"], [180,165,170])); // ["Mary","Emma","John"]
console.log(sortPeople(["Alice","Bob","Bob"], [155,185,150])); // ["Bob","Alice","Bob"]