// Solution for: https://leetcode.com/problems/license-key-formatting/

const licenseKeyFormatting = (s: string, k: number): string => {
    
    const removedDashes = s.split('-').join('').toUpperCase();

    const licenseKeyGroups:string[] = [];

    for(let i = removedDashes.length; i > 0; i--) {
        if(i >= k) {
            licenseKeyGroups.unshift(removedDashes.substring(i - k, i));
            i -= (k - 1);
        } else {
            licenseKeyGroups.unshift(removedDashes.substring(0, i));
            i = 0;
        }
    }

    return licenseKeyGroups.join('-');
    
};


// some test cases
console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4)); // '5F3Z-2E9W'
console.log(licenseKeyFormatting('2-5g-3-J', 2)); // '2-5G-3J'
console.log(licenseKeyFormatting('2-4A0r7-4k', 3)); // '24-A0R-74K'