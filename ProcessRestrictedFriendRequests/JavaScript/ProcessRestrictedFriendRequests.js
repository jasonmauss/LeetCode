// Solution for: https://leetcode.com/problems/process-restricted-friend-requests/
const friendRequests = (n, restrictions, requests) => {
    // base union find data structure
    const friendships = [...new Array(n).keys()];
    // this is equivalent to find in union find
    const findRootFriend = (x) => friendships[x] = friendships[x] === x ? x : findRootFriend(friendships[x]);
    // this is equivalent to union in union find
    const createFriendship = (x, y) => friendships[findRootFriend(x)] = findRootFriend(y);
    const isInSameFriendshipGroup = (person1, person2) => findRootFriend(person1) === findRootFriend(person2);
    return requests.map(([friend1, friend2], i) => {
        if (isInSameFriendshipGroup(friend1, friend2))
            return true;
        for (const [person1, person2] of restrictions) {
            if ((isInSameFriendshipGroup(person1, friend1) && isInSameFriendshipGroup(person2, friend2)) ||
                (isInSameFriendshipGroup(person1, friend2) && isInSameFriendshipGroup(person2, friend1))) {
                return false;
            }
        }
        createFriendship(friend1, friend2);
        return true;
    });
};
// some test cases
console.log(friendRequests(3, [[0, 1]], [[0, 2], [2, 1]])); // [true,false]
console.log(friendRequests(3, [[0, 1]], [[1, 2], [0, 2]])); // [true,false]
console.log(friendRequests(5, [[0, 1], [1, 2], [2, 3]], [[0, 4], [1, 2], [3, 1], [3, 4]])); // [true,false,true,false]
