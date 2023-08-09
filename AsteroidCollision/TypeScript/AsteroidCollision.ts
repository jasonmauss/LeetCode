// Solution for: https://leetcode.com/problems/asteroid-collision/
const asteroidCollision = (asteroids: number[]): number[] => {

    let collisionResults = [asteroids[0]];
    let i = 1;

    while(i < asteroids.length ){

        if(Math.sign(collisionResults[collisionResults.length - 1]) === Math.sign(asteroids[i]) 
        ||(Math.sign(collisionResults[collisionResults.length - 1]) !== 1 && Math.sign(asteroids[i]))) {

            collisionResults.push(asteroids[i]);
            i++;
            continue;

        }        

        if(Math.abs(collisionResults[collisionResults.length - 1]) === Math.abs(asteroids[i])){
            i++;
            collisionResults.pop()
            continue;
        }

        if(Math.abs(collisionResults[collisionResults.length - 1])<Math.abs(asteroids[i])){
            collisionResults.pop()
            continue;
        }

        i++;
    }
    
    return collisionResults;

};





// some test cases
console.log(asteroidCollision([5,10,-5])); // [5,10]
console.log(asteroidCollision([8, -8])); // []
console.log(asteroidCollision([10,2,-5])); // [10]