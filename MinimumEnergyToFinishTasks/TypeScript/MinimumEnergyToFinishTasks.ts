// Solution for:https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/
const minimumEffort = (tasks: number[][]): number => {

    let minEffort = 0;
    let currentEffort = 0;

    // sort by the difference in energy between task energy and required energy
    tasks.sort((a,b) => (b[1] - b[0]) - (a[1] - a[0]));
    currentEffort = tasks[0][1];
    minEffort = currentEffort;

    for(let i = 0 ; i < tasks.length; i++) {
        if(currentEffort < tasks[i][1]){
            let increaseNeeded = tasks[i][1] - currentEffort;
            currentEffort += increaseNeeded;
            minEffort += increaseNeeded;
        }
        
        currentEffort -= tasks[i][0];
    
    }

    return minEffort;

};





// some test cases
console.log(minimumEffort([[1,2],[2,4],[4,8]])); // 8
console.log(minimumEffort([[1,3],[2,4],[10,11],[10,12],[8,9]])); // 32
console.log(minimumEffort([[1,7],[2,8],[3,9],[4,10],[5,11],[6,12]])); // 27