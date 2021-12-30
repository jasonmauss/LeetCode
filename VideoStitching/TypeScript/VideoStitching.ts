// Solution for: https://leetcode.com/problems/video-stitching/
const videoStitching = (clips: number[][], time: number): number => {

    if (time === 0) return 1;

    // sort the clips just to make things easier
    clips.sort((a, b) => a[0] - b[0]);

    // the first clip has to start at 0 so we can cover
    // the entire event time. If it doesn't, then we don't have
    // an essential clip and can't cover the entire event so, return -1.
    if(clips[0][0] > 0) return -1;

    // these vars help us keep track of the range
    // values we're looking for each time we iterate
    // through the clips.
    let curMax:number = 0,
        prevMax:number = 0,
        count:number = 0;
    
    for(let i:number = 0; i < clips.length; i++) {
        
        const curClip:number[] = clips[i];
        const startVal:number = curClip[0];
        const endVal:number = curClip[1];
        
        if(endVal <= curMax) {
            continue;
        } else if (startVal > curMax) {
            return -1; // return -1 because we found a gap between clips that won't allow us to cover the entire range
        }

        // if the current clip starts after the previous max found,
        // use it instead of the one containing the previous max.
        if (startVal > prevMax) {
            count++;
            prevMax = curMax;
        }

        // if the end value from the current clips meets
        // or exceeds the end time, increment the count
        // and return it since we've reached the number of
        // clips needed for complete event coverage
        if(endVal >= time) {
            count++;
            return count;
        }

        // update curMax now since the end of the event wasn't reached
        curMax = endVal;
    }

    // if execution reaches here it means we never encountered
    // a clip containing an end value that equaled the time argument value
    return -1;
};

// some test cases
console.log(videoStitching([[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], 10)); // 3
console.log(videoStitching([[0,1],[1,2]], 5)); // -1
console.log(videoStitching([[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], 9)); // 3