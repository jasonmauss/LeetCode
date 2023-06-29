// Solution for: https://leetcode.com/problems/categorize-box-according-to-criteria/
const categorizeBox = (length: number, width: number, height: number, mass: number): string => {

    var isHeavy = false;
    var isBulky = false;
    
    const TenToFourth = Math.pow(10,4);
    const TenToNinth = Math.pow(10, 9);

    if(length >= TenToFourth || width >= TenToFourth || height >= TenToFourth || length*width*height >= TenToNinth) isBulky = true;
    if(mass >= 100) isHeavy = true;
    
    if(isBulky && isHeavy) return 'Both';
    if(isBulky && !isHeavy) return 'Bulky';
    if(!isBulky && isHeavy) return 'Heavy';
    
    return 'Neither';

};






// some test cases
console.log(categorizeBox(1000,35,700,300)); // "Heavy"
console.log(categorizeBox(200,50,800,50)); // "Neither"