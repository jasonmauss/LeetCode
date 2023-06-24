// Solution for: https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/
const hasGroupsSizeX = (deck: number[]): boolean => {

    const cardsFreq: {[card: number]: number} = {};

    for (let i = 0; i < deck.length; i += 1){
        
        if (!cardsFreq[deck[i]]) {
            cardsFreq[deck[i]] = 1;
            continue;
        }

        cardsFreq[deck[i]] += 1;
    }

    const maxFreq = Math.max(...Object.values(cardsFreq));
    let tempLength = 2;
    let canPartition = false;

    while (tempLength <= maxFreq) {
        
        let partitions = 0;

        for (let num of Object.keys(cardsFreq)) {
            if (cardsFreq[num] % tempLength === 0)
            partitions += 1;
        }

        if (partitions === Object.keys(cardsFreq).length) {
            canPartition = true;
            break;
        }

        tempLength += 1;
    }

    return canPartition;

};






// some test cases
console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1])); // true
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3])); // false