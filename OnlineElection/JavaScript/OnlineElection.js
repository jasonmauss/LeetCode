// Solution for: https://leetcode.com/problems/online-election/
class TopVotedCandidate {
    constructor(persons, times) {
        this._persons = persons;
        this._times = times;
        this._winningTimes = new Object();
        let voteCount = new Array(2).fill(0);
        let curWinningCandidateNum = -1;
        let winningVotes = 0;
        for (let i = 0; i < this._persons.length; i++) {
            if (!voteCount[this._persons[i]]) {
                voteCount[this._persons[i]] = 0;
            }
            voteCount[this._persons[i]]++;
            if (voteCount[this._persons[i]] >= winningVotes) {
                winningVotes = voteCount[this._persons[i]];
                curWinningCandidateNum = this._persons[i];
            }
            this._winningTimes[this._times[i]] = curWinningCandidateNum;
        }
    }
    q(t) {
        let person = 0;
        while (this._times[person] < t) {
            person++;
        }
        if (this._times[person] === t) {
            return this._winningTimes[this._times[person]];
        }
        return this._winningTimes[this._times[person - 1]];
    }
}
/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
// some test cases
let tvc = new TopVotedCandidate([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]);
console.log(tvc.q(3)); // 0
console.log(tvc.q(12)); // 1
console.log(tvc.q(25)); // 1
console.log(tvc.q(15)); // 0
console.log(tvc.q(24)); // 0
console.log(tvc.q(8)); // 1
