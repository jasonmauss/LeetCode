// Solution for: https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/
const maximumRequests = (n: number, requests: number[][]): number => {

    const searchFor = (start, request, incoming, n, count):number => {
        if (start === request.length) {
            for (let i = 0; i < n; i++) {
                if (incoming[i] !== 0) {
                    return 0;
                }
            }
            return count;
        }
    
        incoming[request[start][0]]--;
        incoming[request[start][1]]++;
        const achievable = searchFor(start + 1, request, incoming, n, count + 1);
      
        incoming[request[start][0]]++;
        incoming[request[start][1]]--;
        const notAchievable = searchFor(start + 1, request, incoming, n, count);
      
        return Math.max(achievable, notAchievable);
    }

    const incoming = new Array(n).fill(0);
    return searchFor(0, requests, incoming, n, 0);

};







// some test cases
console.log(maximumRequests(5, [[0,1],[1,0],[0,1],[1,2],[2,0],[3,4]])); // 5
console.log(maximumRequests(3, [[0,0],[1,2],[2,1]])); // 3
console.log(maximumRequests(4, [[0,3],[3,1],[1,2],[2,0]])); // 4
console.log(maximumRequests(3, [[0,0],[1,1],[0,0],[2,0],[2,2],[1,1],[2,1],[0,1],[0,1]])) // 5
console.log(maximumRequests(3, [[1,2],[1,2],[2,2],[0,2],[2,1],[1,1],[1,2]])) // 4
