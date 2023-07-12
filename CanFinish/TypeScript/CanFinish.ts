// Solution for: https://leetcode.com/problems/course-schedule/
const canFinish = (numCourses: number, prerequisites: number[][]): boolean => {

    

    // This will store the course as the key, and all the
    // prerequisites in an array
    const coursesAndPreReqs = new Map<number, number[]>();

    // As we are traversing the prerequisites for each
    // course, we will use this to store them and ensure
    // that they are all unique.
    const courseNumbers = new Set<number>();

    // This function will recurse through prerequisites and
    // add all prereq courses to a list to make sure we're ok
    const recurseThroughPrerequisites = (courseNumber:number):boolean => {
        
        // If the unique set of course numbers already has the
        // course number we are looking at preRequisites of, it
        // means we've basically encountered a deadlock situation
        // where prerequisites depend on each other so we should
        // return false;
        if(courseNumbers.has(courseNumber)) return false;

        // if the course in question somehow doesn't have any
        // prerequisites then we can safely return true
        if((coursesAndPreReqs.get(courseNumber) || []).length === 0) return true;

        // add the current course to the list of courses we've
        // encountered during our recursing through a courses prereq's
        courseNumbers.add(courseNumber);

        // go through each of the prerequisites for the current course
        // and recurse through their own prerequisites to make sure
        // there are no deadlock situations like mentioned above
        for(const courseNum of coursesAndPreReqs.get(courseNumber)) {
            // if false gets returned, bubble that response back up to the caller
            if(!recurseThroughPrerequisites(courseNum)) {
                return false;
            }
        }

        // if execution reaches this point it means that for the current course
        // (courseNumber) the course can be finished, which means we can
        // delete it from the unique set of courses to be considered when any
        // further runs of this function occur.
        courseNumbers.delete(courseNumber);
        // We can also remove the prerequisites from the course as well so that
        // they don't get considered during any further runs of this function. Just
        // set the value for the current key to an empty array
        coursesAndPreReqs.set(courseNumber, []);

        return true;
    }

    // we need to initialize the Map by populating it with 
    // the number of each course as a key, and the list of
    // prerequisite course numbers in an array as the value.
    for(const preReq of prerequisites) {
        const coursePrereqs = coursesAndPreReqs.get(preReq[0]) || [];
        coursePrereqs.push(preReq[1]);
        coursesAndPreReqs.set(preReq[0], coursePrereqs);
    }


    // Loop through each course and ensure it's prerequisite chain
    // is such that courses can all be finished
    for(let i = 0; i < numCourses; i++) {
        if(!recurseThroughPrerequisites(i)) return false;
    }

    
    // we have already returned false if any conditions have been met
    // to indicate that courses can't be finished so if execution reaches
    // this point it's safe to return true.
    return true;

};




// some test cases
console.log(canFinish(2, [[1,0]])); // true
console.log(canFinish(2, [[1,0], [0,1]])); // false
console.log(canFinish(6, [[5,4], [4,3], [3,2], [2,1], [1,0], [0,5]])); // false
console.log(canFinish(6, [[5,4], [4,3], [3,2], [2,1], [1,0]])); // true