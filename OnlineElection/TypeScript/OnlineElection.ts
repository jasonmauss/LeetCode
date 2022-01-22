// Solution for: https://leetcode.com/problems/online-election/
class TopVotedCandidate {
    
    private _winningTimes:Object;
    private _persons:number[];
    private _times:number[];

    constructor(persons: number[], times: number[]) {
        this._persons = persons;
        this._times = times;
        this._winningTimes = new Object();
        
        let voteCount:number[] = new Array<number>(2).fill(0);

        let curWinningCandidateNum:number = -1;
        let winningVotes:number = 0;

        for(let i:number = 0; i < this._persons.length; i++) {
            if(!voteCount[this._persons[i]]) {
                voteCount[this._persons[i]] = 0;
            }
            voteCount[this._persons[i]]++;

            if(voteCount[this._persons[i]] >= winningVotes) {
                winningVotes = voteCount[this._persons[i]];
                curWinningCandidateNum = this._persons[i];
            }
            this._winningTimes[this._times[i]] = curWinningCandidateNum;
        }
    }

    q(t: number): number {
        let person:number = 0;
        while(this._times[person] < t) {
            person++;
        }

        if(this._times[person] === t) {
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
let tvc:TopVotedCandidate = new TopVotedCandidate([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]);
console.log(tvc.q(3)); // 0
console.log(tvc.q(12)); // 1
console.log(tvc.q(25)); // 1
console.log(tvc.q(15)); // 0
console.log(tvc.q(24)); // 0
console.log(tvc.q(8)); // 1