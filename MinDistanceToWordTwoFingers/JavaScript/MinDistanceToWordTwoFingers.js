// Solution for: https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/
const minimumDistance = (word) => {
    const distanceCalc = (firstCharPos, secondCharPos) => {
        const first = word.charCodeAt(firstCharPos) - 65;
        const second = word.charCodeAt(secondCharPos) - 65;
        return Math.abs((first % 6) - (second % 6)) + Math.abs(((first / 6) << 0) - ((second / 6) << 0));
    };
    const distances = new Uint16Array(word.length - 1);
    let sum = 0;
    // get the initial distance between the first two chars
    // then start looping
    let distance = distanceCalc(0, 1);
    for (let i = 2; i < word.length; ++i) {
        sum += distance;
        distance = distanceCalc(i - 1, i);
        let minDistance = sum;
        for (let j = 0; j < i - 1; ++j) {
            const otherMin = distances[j] + distanceCalc(j, i);
            distances[j] = distances[j] + distance;
            if (otherMin < minDistance)
                minDistance = otherMin;
        }
        distances[i - 1] = minDistance;
    }
    return Math.min(...distances, sum);
};
// some test cases
console.log(minimumDistance('CAKE')); // 3
console.log(minimumDistance('HAPPY')); // 6
