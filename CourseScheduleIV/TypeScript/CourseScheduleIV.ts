// Solution for: https://leetcode.com/problems/course-schedule-iv/
const checkIfPrerequisite = (numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] => {

    let relations = {} ,answers = [] ,map = new Map();

    for(let p of prerequisites){
        let [i,j] = p
        if(!relations[j])relations[j]=[]
        relations[j].push(i)
    }
    
    for(let query of queries){
        let dependent = isDependent(query[0],query[1],relations,map)
        answers.push(dependent)
    }
    
    return answers;
};

let isDependent = (a,b,relations,map) => {

    if(map.has(`${a}:${b}`)) return map.get(`${a}:${b}`)
    if(!relations[b] || !relations[b].length){ 
        map.set(`${a}:${b}`,false);
        return false;
    }

    if(relations[b].indexOf(a) >= 0)return true

    for(let rel of relations[b]){
        if(relations[rel]){
            if(isDependent(a,rel,relations,map)){
                map.set(`${a}:${b}`,true);
                return true;
            }
        }
    }

    map.set(`${a}:${b}`,false);

    return false;

};




// some test cases
console.log(checkIfPrerequisite(2, [[1],[0]],[[0,1],[1,0]])); // [false, true]
console.log(checkIfPrerequisite(2, [],[[1,0],[0,1]])); // [false, false]
