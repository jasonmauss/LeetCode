// Solution for: https://leetcode.com/problems/strange-printer-ii/
const isPrintable = (targetGrid) => {
    // will store props for each color
    const colors = new Map();
    targetGrid.forEach((row, i) => {
        row.forEach((color, j) => {
            let c = colors.get(color);
            if (!c) {
                c = { left: Infinity, right: -Infinity, top: Infinity, bottom: -Infinity };
                colors.set(color, c);
            }
            c.left = Math.min(j, c.left);
            c.right = Math.max(j, c.right);
            c.top = Math.min(i, c.top);
            c.bottom = Math.max(i, c.bottom);
        });
    });
    // find which colors we need to validate
    const tofind = new Set([...colors.keys()]);
    const isRectangle = (color, { left, right, bottom, top }) => {
        for (let i = top; i <= bottom; i++) {
            for (let j = left; j <= right; j++) {
                if (targetGrid[i][j] != color && tofind.has(targetGrid[i][j])) {
                    return false;
                }
            }
        }
        return true;
    };
    // if a new rectangle is found that means it could uncover new, additional rectangles,
    // so keep looping while new rectangles are found
    let keepLooping = true;
    while (keepLooping) {
        keepLooping = false;
        colors.forEach((info, color) => {
            if (!tofind.has(color))
                return;
            if (isRectangle(color, info)) {
                keepLooping = true;
                tofind.delete(color);
            }
        });
    }
    return tofind.size === 0;
};
// some test cases
console.log(isPrintable([[1, 1, 1, 1], [1, 2, 2, 1], [1, 2, 2, 1], [1, 1, 1, 1]])); // true
console.log(isPrintable([[1, 1, 1, 1], [1, 1, 3, 3], [1, 1, 3, 4], [5, 5, 1, 4]])); // true
console.log(isPrintable([[1, 2, 1], [2, 1, 2], [1, 2, 1]])); // false
