// Solution for: https://leetcode.com/problems/find-longest-awesome-substring/
const longestAwesome = (s: string): number => {

    // frequency starts with 0:0 because nine zeros is also a state and if I come across a 
    // 0 down the road, that means that the whole array up to index i is of the required type
    let firstIndex = { 0: 0 };
    let result = -1;
    let currentValue = 0;

    for (let i = 0; i < s.length; i++) {

        currentValue ^= 1 << parseInt(s[i]);
        // Check if you have seen currentValue^0=currentValue before, 
        // because that would make the inbetween elements xor = 000000000
        if(firstIndex[currentValue] !== undefined)
            result=Math.max(result, i - firstIndex[currentValue] + 1);
        // Check all the other xors, because that would make 
        // the inbetween elements of the required type (100000000,010000000,......,000000001)
        for (let j = 0; j < 10; j++) {
            let element = 1 << j
            if(firstIndex[currentValue^element] !== undefined)
                // i-firstIndex[currentValue^ele] because on frequency I saved
				// the smallest index where I last met currentValue^element
                result = Math.max(result, i - firstIndex[currentValue ^ element] + 1);
        }

        if(firstIndex[currentValue]===undefined)
            firstIndex[currentValue]=i+1// +1 cos 0th place is for my 0 state
    }
 
    return result;

};



// some test cases
console.log(longestAwesome("3242415")); // 5
console.log(longestAwesome("12345678")); // 1
console.log(longestAwesome("213123")); // 6