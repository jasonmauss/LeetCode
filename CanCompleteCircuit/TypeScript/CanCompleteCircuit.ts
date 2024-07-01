// Solution for: https://leetcode.com/problems/gas-station/

const canCompleteCircuit = (gas: number[], cost: number[]): number => {
    
    let totalCost = 0,
    gasStationIndex = 0,
    tankLevel = 0;

    for (let i = 0; i < gas.length; i++) {
        const val = gas[i] - cost[i];
        totalCost += val;
        tankLevel += val;

        if (totalCost < 0) {
            totalCost = 0;
            gasStationIndex = i + 1;
        }
    }

    if (tankLevel < 0) return -1;

    return gasStationIndex;

};



// some test cases
console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])); // 3
console.log(canCompleteCircuit([2,3,4], [3,4,3])); // -1