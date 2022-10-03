// Solution for: leetcode.com/problems/number-of-flowers-in-full-bloom/
const fullBloomFlowers = (flowers: number[][], persons: number[]): number[] => {

    const start = [];
    const end = [];

    //  Capture/separate the first and start intervals for each of the flowers
    flowers.forEach((v) => { 
        start.push(v[0]); 
        end.push(v[1]); 
    });

    // Sorting the intervals
    const sortFunction = (a, b) => a - b;
    start.sort(sortFunction);
    end.sort(sortFunction);

    // converting the persons array to map
    const personsMap = persons.reduce((a, v, i) => {

        if(v in a) {
            a[v].push(i);
        } else {
            a[v] = [i];
        }
        return a;

    }, {});


    let startPos = 0; // pointer to the start interval
    let endPos = 0; // pointer to the end interval
    let curr = 0; // The value at each interval
    const result = Array(persons.length);
    result.fill(0);

    const personIds = Object.keys(personsMap); // Sorted and unique persons array.

    for(let i = 0; i < personIds.length; i++) {

        const time = personIds[i]; // Time of the ith person
        // The 2 whiles below represent the sweep line

        while(startPos < start.length && start[startPos] <= time) {
            curr += 1;
            startPos++;
        }

        while(endPos < end.length && end[endPos] < time) {
            curr -= 1;
            endPos++;
        }

        for(const person of personsMap[time]) { // All people who came in at time
            result[person] = curr;
        }
    }

    return result;

};



// some test cases
console.log(fullBloomFlowers([[1,6],[3,7],[9,12],[4,13]], [2,3,7,11])); // [1,2,2,2]
console.log(fullBloomFlowers([[1,10],[3,3]], [3,3,2])); // [2,2,1]