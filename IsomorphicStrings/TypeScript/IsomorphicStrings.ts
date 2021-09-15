// Solution for: https://leetcode.com/problems/isomorphic-strings/
const isIsomorphic = (s: string, t: string): boolean => {

    const mapSet: Set<string> = new Set<string>();
    const occurenceSet: Set<string> = new Set<string>();

    for(let i: number = 0; i < s.length; i++) {

        let key:string = `${s.substring(i, i + 1)} : ${t.substring(i, i+ 1)}`;
        
        if(occurenceSet.has(s[i])) {
            if(!mapSet.has(key)) {
                return false;
            } else {
                mapSet.add(key);
            }
        } else {
            occurenceSet.add(s[i]);
        }
    }

    return true;

};

// some test cases
console.log(isIsomorphic('egg','add')); // true
console.log(isIsomorphic('foo','bar')); // false
console.log(isIsomorphic('paper','title')); // true
console.log(isIsomorphic('paper','tille')); // false