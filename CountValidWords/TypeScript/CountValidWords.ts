// Solution for: https://leetcode.com/problems/number-of-valid-words-in-a-sentence/
const isValidToken = (token: string): boolean => {

    // if the token is an empty string, it's invalid
    if(token.trim().length === 0) return false;
    // if the token contains a number, it's invalid
    if(/\d/.test(token)) return false;
    // if the token contains more tha one hyphen, it's invalid
    if((token.match(/-/g) || []).length > 1) return false;
    // if the token contains more than one of these punctuations characters, it's invalid
    if ((token.match(/[,|.|!]/g) || []).length > 1) return false;
    // if the token contains a character other than a-z and the allowed punctuation chars (,.!) it's invalid
    if((token.match(/[^a-z|,|!|.|-]/g) || []).length > 0) return false;

    // if the token is more than just one characters, and
    // if a punctuation char appears anywhere other than the end, it's invalid
    if(token.length > 1) {
        if(token.startsWith('!') ||
        token.startsWith('.') ||
        token.startsWith(',')) return false;
    }

    // if a punctuation mark exists but it's not at the end
    // of the string, return false;
    let exIndex = token.indexOf('!');
    let cmIndex = token.indexOf(',');
    let pdIndex = token.indexOf('.');

    let tokenLength = token.length;

    if((exIndex > -1 && exIndex < tokenLength - 1) ||
       (cmIndex > -1 && cmIndex < tokenLength - 1) ||
       (pdIndex > -1 && pdIndex < tokenLength - 1)) return false;

    let hyphenIndex = token.indexOf('-');
    if(hyphenIndex > -1) {
        if(hyphenIndex === 0 || hyphenIndex === tokenLength - 1)
            return false;

        let beforeCode = token.charCodeAt(hyphenIndex - 1);
        let afterCode = token.charCodeAt(hyphenIndex + 1);

        if((beforeCode < 97 || beforeCode > 122) ||
           (afterCode < 97 || afterCode > 122)) return false;
    }

    return true;

};

const countValidWords = (sentence: string): number => {

    // keep track of the number of "valid word" tokens found
    let validTokens = 0;

    // split the string by number of whitespace chars
    const tokens = sentence.split(/\s+/);

    for(const token of tokens) {
        if(isValidToken(token))
            validTokens++;
    }

    return validTokens;

};





// some test cases
console.log(countValidWords("cat and  dog")); // 3
console.log(countValidWords("!this  1-s b8d!")); // 0
console.log(countValidWords("alice and  bob are playing stone-game10")); // 5
console.log(countValidWords("he bought 2 pencils, 3 erasers, and 1  pencil-sharpener.")) // 6
console.log(countValidWords("!g 3 !sy ")); // 0
console.log(countValidWords(" 62   nvtk0wr4f  8 qt3r! w1ph 1l ,e0d 0n 2v 7c.  n06huu2n9 s9   ui4 nsr!d7olr  q-, vqdo!btpmtmui.bb83lf g .!v9-lg 2fyoykex uy5a 8v whvu8 .y sc5 -0n4 zo pfgju 5u 4 3x,3!wl  fv4   s  aig cf j1 a i  8m5o1  !u n!.1tz87d3 .9    n a3  .xb1p9f  b1i a j8s2 cugf l494cx1! hisceovf3 8d93 sg 4r.f1z9w   4- cb r97jo hln3s h2 o .  8dx08as7l!mcmc isa49afk i1 fk,s e !1 ln rt2vhu 4ks4zq c w  o- 6  5!.n8ten0 6mk 2k2y3e335,yj  h p3 5 -0  5g1c  tr49, ,qp9 -v p  7p4v110926wwr h x wklq u zo 16. !8  u63n0c l3 yckifu 1cgz t.i   lh w xa l,jt   hpi ng-gvtk8 9 j u9qfcd!2  kyu42v dmv.cst6i5fo rxhw4wvp2 1 okc8!  z aribcam0  cp-zp,!e x  agj-gb3 !om3934 k vnuo056h g7 t-6j! 8w8fncebuj-lq    inzqhw v39,  f e 9. 50 , ru3r  mbuab  6  wz dw79.av2xp . gbmy gc s6pi pra4fo9fwq k   j-ppy -3vpf   o k4hy3 -!..5s ,2 k5 j p38dtd   !i   b!fgj,nx qgif ")); // 49