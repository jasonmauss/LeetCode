// Solution for: https://leetcode.com/problems/decode-string/
const decodeString = (s: string): string => {

    const stack = [];
    for (const char of s) {
        if (char !== "]") { stack.push(char); continue; }
        let cur = stack.pop();
        let str = '';
        while (cur !== '[') {
        str = cur + str;
        cur = stack.pop();
        }

        let num = '';
        cur = stack.pop();

        while (!Number.isNaN(Number(cur))) {
        num = cur + num;
        cur = stack.pop();
        }

        stack.push(cur);
        stack.push(str.repeat(Number(num)));
    }

    return stack.join('');

};


// some test cases
console.log(decodeString("3[a]2[bc]")); // "aaabcbc"
console.log(decodeString("3[a2[c]]")); // "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // "abcabccdcdcdef"