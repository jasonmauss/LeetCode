function compose(functions) {
    const returnFunc = (i) => i;
    return functions.reduceRight((composition, func) => ((i) => func(composition(i))), returnFunc);
}
;
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
// some test cases
const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9
const fn2 = compose([x => x * 3, x => 2 + x, x => x + 14]);
console.log(fn2(3)); // 
