// Solution for: https://leetcode.com/problems/making-file-names-unique/
const getFolderNames = (names) => {
    const acts = new Map();
    for (const n of names) {
        if (!acts.has(n)) {
            acts.set(n, 1);
        }
        else {
            while (acts.has(`${n}(${acts.get(n)})`)) {
                acts.set(n, acts.get(n) + 1);
            }
            acts.set(`${n}(${acts.get(n)})`, 1);
        }
    }
    return [...acts.keys()];
};
// some test cases
console.log(getFolderNames(["pes", "fifa", "gta", "pes(2019)"])); // ["pes","fifa","gta","pes(2019)"]
console.log(getFolderNames(["gta", "gta(1)", "gta", "avalon"])); // ["gta","gta(1)","gta(2)","avalon"]
console.log(getFolderNames(["onepiece", "onepiece(1)", "onepiece(2)", "onepiece(3)", "onepiece"])); // ["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece(4)"]
