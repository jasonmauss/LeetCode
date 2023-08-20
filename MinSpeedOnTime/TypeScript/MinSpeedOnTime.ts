// Solution for: https://leetcode.com/problems/minimum-speed-to-arrive-on-time/
const minSpeedOnTime = (dist: number[], hour: number): number => {

    const distances = dist.length;

    if(hour <= distances - 1) return -1;

    // get the upper bound of the speed range
    const TopSpeed = Math.max(...dist, hour === (hour | 0)
                                       ? 0
                                       : Math.ceil(dist[distances - 1] / (hour - distances + 1))
                             );

    let left = 1;
    let right = TopSpeed;

    // function to see if the speed works or not
    const speedGetsYouThereOnTime = (speed:number): boolean => {
        let result = 0;
        for(let i = 0; i < distances - 1; i++) {
            if((result += Math.ceil(dist[i] / speed)) > hour) {
                return false;
            }
        }
        return (result + dist[distances - 1] / speed) <= hour;
    };

    // perform binary search to find the min speed
    while(left <= right) {
        const mid = (left + right) >>> 1;
        if(speedGetsYouThereOnTime(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};




// some test cases
console.log(minSpeedOnTime([1,3,2], 6)); // 1
console.log(minSpeedOnTime([1,3,2], 2.7)); // 3
console.log(minSpeedOnTime([1,3,2], 1.9)); // -1