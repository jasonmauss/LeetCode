// Solution for: https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/
const captureForts = (forts) => {
    let maxForts = 0;
    const checkForts = (fortArray) => {
        let maxForts = 0;
        // move forward in the forts and capture the max sequence of
        // zero's that exist between a 1 and -1.
        for (let i = 0; i < forts.length; i++) {
            if (forts[i] === 1) {
                let placeholder = i;
                let fortsFound = 0;
                i++;
                while (forts[i] === 0) {
                    fortsFound++;
                    i++;
                }
                if (forts[i] === -1) {
                    maxForts = Math.max(maxForts, fortsFound);
                }
                // go back to our placeholder
                i = placeholder;
            }
        }
        return maxForts;
    };
    return Math.max(...[checkForts(forts), checkForts(forts.reverse())]);
};
// some test cases
console.log(captureForts([1, 0, 0, -1, 0, 0, 0, 0, 1])); // 4
console.log(captureForts([0, 0, 1, -1])); // 0
