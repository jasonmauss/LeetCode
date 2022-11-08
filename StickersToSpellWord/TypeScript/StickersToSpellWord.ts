// Solution for: https://leetcode.com/problems/stickers-to-spell-word/
const minStickers = (stickers: string[], target: string): number => {

    const getDic = (str:string): object => {
        let dic = {};
        for (let char of str) {
          dic[char] = (dic[char] || 0) + 1;
        }
        return dic;
    }

    let sDics = stickers.map(x => getDic(x)), tDic = getDic(target)

    // check can make
    let sKeys = sDics.reduce((a, b) => Object.assign({}, a, b))
    for (let k in tDic) {
        if (!sKeys[k]) return -1;
    }

    // remove uselsess
    sDics = sDics.map(x => {
        for (let k in x) {
            if (!tDic[k]) delete x[k];
        }
        return x;
    });

    const calcLeft = (left:any = [], dics:object = {}):any => {
        let rtn = left.concat([]);
        let useful = false;
        for (let i = 0; i < left.length; i++) {
            let k = keys[i];
            if (!dics[k] || !rtn[i]) continue;
            rtn[i] = Math.max(0, rtn[i] - dics[keys[i]]);
            useful = true;
        }
        return [useful, rtn];
    }

    function r(left = keys.map(x => tDic[x])) {
        let k = left.join('');
        if (caches[k] !== undefined) return caches[k];
        if (left.every(x => !x)) return 0;
        let min = Number.MAX_SAFE_INTEGER;
        for (let sd of sDics) {
            let [tuseful, tleft] = calcLeft(left, sd);
            if (!tuseful) continue;
            min = Math.min(min, r(tleft))
        }

        caches[k] = min + 1;
        return caches[k];

    }

    // recursion with memorize
    let keys = Object.keys(tDic);
    let caches = {};
    let rtn = r();
    return rtn;

};





// some test cases
console.log(minStickers(["with","example","science"], "thehat")); // 3
console.log(minStickers(["notice","possible"], "basicbasic")); // -1