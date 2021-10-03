// Solution for: https://leetcode.com/problems/find-the-difference/
const findTheDifference = (s: string, t: string): string => {

    if(s.length === 0) return t;

    const sArray: string[] = s.split('');
    const tArray: string[] = t.split('');

    for(let i:number = 0; i < tArray.length; i++) {
        if(!sArray.includes(tArray[i])) {
            return tArray[i];
        } else {
            let index:number = sArray.indexOf(t[i]);
            if(index !== -1) {
                sArray.splice(index, 1);
            }
        }
    }

    return '';
};


// some test cases
console.log(findTheDifference('abcd','abcde')); // 'e'
console.log(findTheDifference('','y')); // 'y'
console.log(findTheDifference('a','aa')); // 'a'
console.log(findTheDifference('ae','aea')); // 'a'