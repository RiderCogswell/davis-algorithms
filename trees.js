// Breadth First Traversal

class Node {
    constructor (data) {

        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor (data) {
        // sets root value
        this.root = null;
        // sets empty traversal array
        this.traversal = [];
    }

    breadthFirst() {
        // references the level we are on,
        const height = this.getHeight(this.root);
        for (let i = 0; i !== height; i++) {
            // loops through and retrieves the data
            this.traverseLevel(this.root, i);
        }
        // return data
        return this.traversal;
    }

    // computing the height of the tree
    getHeight(node) {
        if (node === null) {
            return 0;
        }
        
        const leftHeight = this.getHeight(node.left);
        const rightHeight = this.getHeight(node.right);
        
        return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1
    }

    // traverse a level recursively
    traverseLevel (node, levelRemaining) {
        // end of tree
        if (node === null) {
            return
        } 
        // if end of tree
        if  (levelRemaining === 0) {
            // push node.data into binaryTree.traversal
            this.traversal.push(node.data)
        } else {
            // else, move a level
            this.traverseLevel(node.left, levelRemaining -1)
            this.traverseLevel(node.right, levelRemaining -1)
        }
    }
}

export { BinaryTree, Node }