// Solution for: https://leetcode.com/problems/special-binary-string/
const makeLargestSpecial = (s: string): string => {
  
    const recurse = (s): string => {
        let i:number = 0;
        let result:string[] = [];
        let bal:number = 0;

        for (let j = 0; j < s.length; j++) {
            if (s[j] === '1') bal++;
            else bal--;

            if (bal === 0) {
                result.push('1' + recurse(s.slice(i + 1, j)) + '0');
                i = j + 1;
            }
        }
        
        result.sort((a, b) => b.localeCompare(a));
        return result.join(''); 
    }

    return recurse(s);
};




// some test cases
console.log(makeLargestSpecial("11011000")); // "11100100"
console.log(makeLargestSpecial("10")); // "10"
