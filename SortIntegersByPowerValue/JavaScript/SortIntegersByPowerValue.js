// Solution for: https://leetcode.com/problems/sort-integers-by-the-power-value/
const getKth = (lo, hi, k) => {
    let powersMap = new Map();
    for (let j = lo; j <= hi; j++) {
        let index = 0;
        let i = j;
        while (i > 1) {
            if (i % 2 == 0) {
                i = i / 2;
            }
            else {
                i = 3 * i + 1;
            }
            index++;
        }
        powersMap.set(j, index);
    }
    let returnMap = new Map([...powersMap.entries()].sort((a, b) => a[1] - b[1]));
    return ([...returnMap.entries()][k - 1][0]);
};
// some test cases
console.log(getKth(12, 15, 2)); //  13
console.log(getKth(7, 11, 4)); //  7
