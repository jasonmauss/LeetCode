// Solution for: https://leetcode.com/problems/roman-to-integer/

function romanToInt(s: string): number {

    let returnValue:number = 0;

    for(let i:number = 0; i < s.length; i++) {

        let nextTwo = s.length > i + 1 ? s[i] + s[i + 1] : s[i];

        switch(nextTwo) {
            case 'CM':
                returnValue += 900;
                i++;
                break;
            case 'CD':
                returnValue += 400;
                i++;
                break;
            case 'XC':
                returnValue += 90;
                i++;
                break;
            case 'XL':
                returnValue += 40;
                i++;
                break;
            case 'IX':
                returnValue += 9;
                i++;
                break;
            case 'IV':
                returnValue += 4;
                i++;
                break;
            default:
                if (s[i] === 'M') returnValue += 1000;
                if (s[i] === 'D') returnValue += 500;
                if (s[i] === 'C') returnValue += 100;
                if (s[i] === 'L') returnValue += 50;
                if (s[i] === 'X') returnValue += 10;
                if (s[i] === 'V') returnValue += 5;
                if (s[i] === 'I') returnValue += 1;
            
                break;
        }
    }

    return returnValue;
}

// some test cases
console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994