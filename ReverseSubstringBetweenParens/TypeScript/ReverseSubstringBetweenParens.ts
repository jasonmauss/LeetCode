// Solution for: https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/
const reverseParentheses = (s: string): string =>{

    let result:string = '';
    
    if(s.indexOf('(') === -1) return s.split('').reverse().join('');

    const getOpeningBracketPos = (closingBracketPos:number, stringValue:string): number => {
        for(let i:number = closingBracketPos; i >= 0; i--) {
            if(stringValue.substring(i, i + 1) === '(') {
                return i;
            }
        }
        return -1;
    };

    while(s.indexOf('(') > -1) {
        let closingBracketPos:number = s.indexOf(')');
        if(closingBracketPos > -1) {
            let openingBracketPos:number = getOpeningBracketPos(closingBracketPos, s);
            if(openingBracketPos > -1) {
                let stringToReverse:string = s.substring(openingBracketPos + 1, closingBracketPos);
                stringToReverse = stringToReverse.split('').reverse().join('');
                s = s.substring(0, openingBracketPos) + 
                    stringToReverse + 
                    s.substring(closingBracketPos + 1);
                result = s;
            } else {
                let stringToReverse:string = s.substring(openingBracketPos + 1, closingBracketPos);
                return stringToReverse.split('').reverse().join('');
            }
        }
    }

    return result;
    
};

// some test cases
console.log(reverseParentheses("(abcd)")); // "dcba"
console.log(reverseParentheses("(u(love)i)")); // "iloveu"
console.log(reverseParentheses("(ed(et(oc))el)")); // "leetcode"