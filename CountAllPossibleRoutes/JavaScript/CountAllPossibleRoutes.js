// Solution for: CountAllPossibleRoutes
const countRoutes = (locations, start, finish, fuel) => {
    const mod = 10 ** 9 + 7;
    const waysToReach = new Array(locations.length).fill(0)
        .map(() => new Array(fuel + 1).fill(0));
    waysToReach[start][0] = 1;
    let waysToReachFinish = waysToReach[finish][0];
    for (let currentFuel = 1; currentFuel <= fuel; currentFuel += 1) {
        for (let to = 0; to < locations.length; to += 1) {
            for (let from = 0; from < locations.length; from += 1) {
                if (from === to)
                    continue;
                const distBetweenLocations = Math.abs(locations[to] - locations[from]);
                if (distBetweenLocations > currentFuel)
                    continue;
                const remFuel = currentFuel - distBetweenLocations;
                waysToReach[to][currentFuel] = (waysToReach[to][currentFuel] + waysToReach[from][remFuel]) % mod;
            }
        }
        waysToReachFinish = (waysToReachFinish + waysToReach[finish][currentFuel]) % mod;
    }
    return waysToReachFinish;
};
// some test cases
console.log(countRoutes([2, 3, 6, 8, 4], 1, 3, 5)); // 4
console.log(countRoutes([4, 3, 1], 1, 0, 6)); // 5
console.log(countRoutes([5, 2, 1], 0, 2, 3)); // 0
