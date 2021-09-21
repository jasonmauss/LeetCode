interface String {
    repeat(count: number): string
    substr(from: number, length?: number): string
}

// Solution for: https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
const generateTheString = (n: number): string => {

    // simple one-liner using .repeat()
    return n % 2 === 0 ? `${'a'.repeat(n - 1)}b` : 'a'.repeat(n);

};



// some test cases
console.log(generateTheString(4)); // aaab
console.log(generateTheString(2)); // ab
console.log(generateTheString(7)); // aaaaaaa