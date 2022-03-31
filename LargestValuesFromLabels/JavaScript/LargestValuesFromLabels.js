// Solution for: https://leetcode.com/problems/largest-values-from-labels/
const largestValsFromLabels = (values, labels, numWanted, useLimit) => {
    let label_usage = new Array(20001).fill(0);
    let values_labels = values.map((val, ind) => {
        return [val, labels[ind]];
    });
    values_labels.sort((a, b) => {
        return b[0] - a[0];
    });
    let picked_values = [];
    while (picked_values.length < numWanted && values_labels.length > 0) {
        let cand = values_labels.shift();
        if (label_usage[cand[1]] < useLimit) {
            label_usage[cand[1]] += 1;
            picked_values.push(cand[0]);
        }
        else {
            continue;
        }
    }
    return picked_values.reduce((a, b) => {
        return a + b;
    });
};
// some test cases
console.log(largestValsFromLabels([5, 4, 3, 2, 1], [1, 1, 2, 2, 3], 3, 1)); // 9
console.log(largestValsFromLabels([5, 4, 3, 2, 1], [1, 3, 3, 3, 2], 3, 2)); // 12
console.log(largestValsFromLabels([9, 8, 8, 7, 6], [0, 0, 0, 1, 1], 3, 1)); // 16
