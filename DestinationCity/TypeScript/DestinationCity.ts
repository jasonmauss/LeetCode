// Solution for: https://leetcode.com/problems/destination-city/
const destCity = (paths: string[][]): string => {

    const leftCity: string[] = []
    const rightCity: string[] = []
  
    paths.forEach(path => {
        leftCity.push(path[0]);
        rightCity.push(path[1]);
    })
  
    return rightCity.find((item: string) => !leftCity.includes(item)) || '';

};

// some test cases
console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]])); // Sao Paulo
console.log(destCity([["B","C"],["D","B"],["C","A"]])); // A
console.log(destCity([["A","Z"]])); // Z