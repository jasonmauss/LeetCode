// Solution for: https://leetcode.com/problems/remove-boxes/
const removeBoxes = (boxes: number[]): number => {

    const merged = [];
    const points = [];
    let count = 1;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i] !== boxes[i + 1]) {
            merged.push(boxes[i]);
            points.push(count);
            count = 1;
            continue;
        }
        count++;
    }

  const size = merged.length;
  const dp = Array.from({ length: size }, () => Array.from({ length: size }, () => new Uint16Array(boxes.length)))

  const calculate = (left:number, right:number, p):number => {

    if (left > right) {
        return 0;
    }

    if (dp[left][right][p]) {
        return dp[left][right][p];
    }

    let point = points[left] + p;
    let max = point * point + calculate(left + 1, right, 0);

    for (let i = left + 1; i <= right; i++) {
      if (merged[i] === merged[left]) {
        max = Math.max(max, calculate(left + 1, i - 1, 0) + calculate(i, right, point));
      }
    }

    dp[left][right][p] = max;
    return max;
  }

  return calculate(0, size - 1, 0);

};


// some test cases
console.log(removeBoxes([1,3,2,2,2,3,4,3,1])); // 23
console.log(removeBoxes([1,1,1])); // 9
console.log(removeBoxes([1])); // 1