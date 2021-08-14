// Solution for: https://leetcode.com/problems/letter-combinations-of-a-phone-number/

interface keyPad {
    [name: number]: string[];
}

let phoneKeypad: keyPad = {
    [2]: ['a','b','c'],
    [3]: ['d', 'e', 'f'],
    [4]: ['g', 'h', 'i'],
    [5]: ['j', 'k', 'l'],
    [6]: ['m', 'n', 'o'],
    [7]: ['p', 'q', 'r', 's'],
    [8]: ['t', 'u', 'v'],
    [9]: ['w', 'x', 'y', 'z']
};

const letterCombinations = (digits: string): string[] => {

    if (!digits) return [];

    const combinations = new Set<string>();
    const result: string[] = [];

    const combiner = (stringCombination: string, left: string) => {
        if (combinations.has(stringCombination)) return;
        combinations.add(stringCombination);

        if (!left) {
            result.push(stringCombination);
            return;
        }

        const newLeft = left.slice(1);

        phoneKeypad[left[0]].forEach((char) => {
            combiner(stringCombination + char, newLeft);
        });
    };

    combiner('', digits);
    return result;
};

// some test cases
console.log(letterCombinations('23')); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations('2')); // ["a","b","c"]
console.log(letterCombinations('')); // []
console.log(letterCombinations('46')); // ["gm", "gn", "go", "hm", "hn", "ho", "im", "in", "io"]
console.log(letterCombinations('579')); // ["jpw", ....]