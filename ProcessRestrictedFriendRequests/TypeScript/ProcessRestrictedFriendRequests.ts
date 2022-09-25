// Solution for: https://leetcode.com/problems/process-restricted-friend-requests/
const friendRequests = (n: number, restrictions: number[][], requests: number[][]): boolean[] => {

    return [true];

};





// some test cases
console.log(friendRequests(3, [[0,1]], [[0,2],[2,1]])); // [true,false]
console.log(friendRequests(3, [[0,1]], [[1,2],[0,2]])); // [true,false]
console.log(friendRequests(5, [[0,1],[1,2],[2,3]], [[0,4],[1,2],[3,1],[3,4]])); // [true,false,true,false]