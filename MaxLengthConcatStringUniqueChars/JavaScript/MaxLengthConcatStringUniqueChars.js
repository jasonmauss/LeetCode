// Solution for: https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
const maxLength = (arr) => {
    const process = (arr, soFar, index) => {
        if (index > arr.length)
            return 0;
        let set = new Set();
        let chars = soFar.split('');
        for (let char of chars) {
            if (set.has(char))
                return 0;
            set.add(char);
        }
        let max = soFar.length;
        for (let i = index; i < arr.length; i++) {
            max = Math.max(max, process(arr, soFar + arr[i], i + 1));
        }
        return max;
    };
    return process(arr, '', 0);
};
// some test cases
console.log(maxLength(["un", "iq", "ue"])); // 4
console.log(maxLength(["cha", "r", "act", "ers"])); // 6
console.log(maxLength(["abcdefghijklmnopqrstuvwxyz"])); // 26
