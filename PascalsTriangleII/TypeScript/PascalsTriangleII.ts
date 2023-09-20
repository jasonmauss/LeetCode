// Solution for: https://leetcode.com/problems/pascals-triangle-ii/
const getRow = (rowIndex: number): number[] => {

    const result = [1];

    for(let i = 1; i <= rowIndex; i++) {
        result[i] = result[i - 1] * (rowIndex - i + 1) / i;
    }

    return result;
    
};






// some test cases
console.log(getRow(3)) // [1,3,3,1]
console.log(getRow(0)) // [1]
console.log(getRow(1)) // [1,1]
