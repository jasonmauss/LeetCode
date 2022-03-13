// Solution for: https://leetcode.com/problems/distant-barcodes/
const rearrangeBarcodes = (barcodes) => {
    let map = new Map();
    for (let e of barcodes) {
        map.set(e, (map.get(e) || 0) + 1);
    }
    let arr = Array.from(map.keys()).sort(((a, b) => map.get(b) - map.get(a)));
    let n = barcodes.length, i = 0, res = [];
    for (let e of arr) {
        let count = map.get(e);
        while (count--) {
            res[i] = e;
            i += 2;
            if (i >= n)
                i = 1;
        }
    }
    return res;
};
// some test cases
console.log(rearrangeBarcodes([1, 1, 1, 2, 2, 2])); // [2,1,2,1,2,1]
console.log(rearrangeBarcodes([1, 1, 1, 1, 2, 2, 3, 3])); // [1,3,1,3,1,2,1,2]
