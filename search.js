const linearSearch = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }

    return -1;
}; 

const binarySearch = (arr, num, left, right) => {
    let middle = Math.floor((left + right) / 2);

    if (left > right) {
        return -1;
    }
    else if (num === arr[middle]) {
        return middle; 
    }
    else if (num < arr[middle]) {
        return binarySearch(arr, num, left, middle -1);
    }
    else {
        return binarySearch(arr, num, middle + 1, right);
    }
};

class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch = (array) => {
        // push this.child into array
        array.push(this.child)

        // loop through and recursively perform DFS on each child
        for (const child of this.children) {
            child.depthFirstSearch(array);
        }
        
        return array;
    }

    breadthFirstSearch = (array) => {
        // create nodes variable holding array of this
        let nodes = [this]

        // loop through while there are nodes to visit
        while (nodes.length) {
            // set current the first element from nodes,
            let current = nodes.shift()
            // push new values to end of array
            array.push(nodes.value)
            // push the current children to the nodes to cycle through
            nodes.push(...current.children)
        }
        return array;
    }
}


module.exports = { linearSearch, binarySearch };