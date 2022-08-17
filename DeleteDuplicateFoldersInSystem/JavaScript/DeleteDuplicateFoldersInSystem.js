// Solution for: https://leetcode.com/problems/delete-duplicate-folders-in-system/
class PathTrieNode {
    val = '';
    children = new Map();
    hash = '';
    // Parent pointer is important when we are trying to delete nodes.
    parent;
}
class PathTrie {
    root = new PathTrieNode();
    hashMemMap = new Map();
    /**
    * Builds Trie tree for each path passed in Test Case
    */
    build(path) {
        let node = this.root;
        for (let pathVal of path) {
            if (!node.children.has(pathVal)) {
                const childNode = new PathTrieNode();
                childNode.parent = node;
                childNode.val = pathVal;
                node.children.set(childNode.val, childNode);
                node = childNode;
            }
            else {
                node = node.children.get(pathVal);
            }
        }
    }
    /**
    * Creates hash for a node based on it's sub folders
    *  Note that sorting for subfolder is important.
    */
    createHash(node = this.root) {
        if (node.children.size === 0) {
            // leaf node
            return node.val;
        }
        let hash = [];
        for (let child of node.children.values()) {
            hash.push(this.createHash(child));
        }
        hash = hash.sort();
        node.hash = hash.join('~');
        if (!this.hashMemMap.has(node.hash)) {
            this.hashMemMap.set(node.hash, []);
        }
        this.hashMemMap.get(node.hash).push(node);
        return node.val + '[' + node.hash + ']';
    }
    /**
    * Deletes similar folders as map would contain more than one entries for those.
    * For deleting a node, we go its parent, and delete parent's connection to child.
    */
    removeDuplicates(node = this.root) {
        if (this.hashMemMap.has(node.hash) && this.hashMemMap.get(node.hash).length > 1) {
            for (let deleteNode of this.hashMemMap.get(node.hash)) {
                deleteNode.parent.children.delete(deleteNode.val);
            }
        }
        for (let child of node.children.values()) {
            this.removeDuplicates(child);
        }
    }
    /**
    * Stack is used to track folder structure (dfs kind of thing)
    * Res contains actual items.
    */
    toArray(node = this.root, stack = [], result = []) {
        if (node.val !== '') {
            stack.push(node.val);
            result.push([...stack]);
        }
        for (let child of node.children.values()) {
            this.toArray(child, stack, result);
        }
        stack.pop();
        return result;
    }
}
const deleteDuplicateFolder = (paths) => {
    const pathTrie = new PathTrie();
    for (let path of paths) {
        pathTrie.build(path);
    }
    pathTrie.createHash();
    pathTrie.removeDuplicates();
    return pathTrie.toArray();
};
// some test cases
console.log(deleteDuplicateFolder([["a"], ["c"], ["d"], ["a", "b"], ["c", "b"], ["d", "a"]])); // [["d"],["d","a"]]
console.log(deleteDuplicateFolder([["a"], ["c"], ["a", "b"], ["c", "b"], ["a", "b", "x"], ["a", "b", "x", "y"], ["w"], ["w", "y"]])); // [["c"],["c","b"],["a"],["a","b"]]
console.log(deleteDuplicateFolder([["a", "b"], ["c", "d"], ["c"], ["a"]])); // [["c"],["c","d"],["a"],["a","b"]]
