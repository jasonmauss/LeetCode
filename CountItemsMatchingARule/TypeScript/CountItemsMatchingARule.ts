// Solution for: https://leetcode.com/problems/count-items-matching-a-rule/

const countMatches = (items: string[][], ruleKey: string, ruleValue: string): number => {

    let matches:number = 0;

    for(let i:number = 0; i < items.length; i++) {
        if(ruleKey === 'type' && items[i][0] === ruleValue) { matches++; continue; }
        if(ruleKey === 'color' && items[i][1] === ruleValue) { matches++; continue; }
        if(ruleKey === 'name' && items[i][2] === ruleValue) { matches++; continue; }
    }

    return matches;
};

// some test cases
console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver")); // 1
console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone")); // 2