// Solution for: https://leetcode.com/problems/freedom-trail/
const findRotateSteps = (ring: string, key: string, keyIndex:number = 0, currentRingIndex:number = 0, memo:object = {}): number => {

    let ckey = `${keyIndex},${currentRingIndex}`;
    if(ckey in memo) {
        return memo[ckey];
    }

    let letter = key[keyIndex];
    let clockwiseIndex = ring.indexOf(letter, currentRingIndex);
    let clockwiseDistance;
    if(clockwiseIndex < 0 ){ 
        clockwiseIndex = ring.indexOf(letter);
        clockwiseDistance = ring.length - currentRingIndex + clockwiseIndex;
    }else{
        clockwiseDistance = clockwiseIndex - currentRingIndex;
    }
    
    let antiClockIndex = ring.lastIndexOf(letter, currentRingIndex);
    let antiClockDistance;
    if(antiClockIndex < 0) {
        antiClockIndex = ring.lastIndexOf(letter);
        antiClockDistance = currentRingIndex + ring.length - antiClockIndex;
    } else {
        antiClockDistance = currentRingIndex - antiClockIndex;
    }
    
    if(keyIndex === key.length-1) {
        memo[ckey] = 1+ Math.min(clockwiseDistance, antiClockDistance);
        return memo[ckey];
    }
    
    memo[ckey] = 1 + Math.min(clockwiseDistance + findRotateSteps(ring, key, keyIndex+1, clockwiseIndex, memo), 
                                antiClockDistance + findRotateSteps(ring, key, keyIndex+1, antiClockIndex, memo));
    return memo[ckey];

};



// some test cases
console.log(findRotateSteps('godding','gd')); // 4
console.log(findRotateSteps('godding','godding')); // 13