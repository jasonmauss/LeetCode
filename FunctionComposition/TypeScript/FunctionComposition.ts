// Solution for: https://leetcode.com/problems/function-composition/
type F = (x: number) => number;

function compose(functions: F[]): F {
	return function(x) {
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */






// some test cases
console.log(); // 