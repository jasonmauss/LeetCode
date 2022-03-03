// Solution for: https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/
const findLengthOfShortestSubarray = (arr) => {
    let left = 0, pos = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            if (pos.length == 2) {
                pos.pop();
            }
            pos.push([left, i - 1]);
            left = i;
        }
    }
    if (pos.length == 2)
        pos.pop();
    pos.push([left, arr.length - 1]);
    if (pos.length < 2)
        return 0;
    let result = arr.length;
    let i = 0, j = pos[1][0];
    while (i <= pos[0][1] && j <= pos[1][1]) {
        if (arr[i] > arr[j]) {
            result = Math.min(result, j - pos[1][0] + pos[0][1] - i + 1);
            j++;
        }
        else {
            i++;
        }
    }
    result = Math.min(result, j - pos[1][0]);
    return result + (pos[1][0] - 1) - (pos[0][1] + 1) + 1;
};
// some test cases
console.log(findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5])); // 3
console.log(findLengthOfShortestSubarray([5, 4, 3, 2, 1])); // 4
console.log(findLengthOfShortestSubarray([1, 2, 3])); // 0
