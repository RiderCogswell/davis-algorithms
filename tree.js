// class BST
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// iterative approach
// O(log(n)) average time, O(n) worst
// O(1) space
const findClosestValueInBST = (tree, target) => {
  return findClosestHelper(tree, target, tree.value)
}

const findClosestHelper = (tree, target, closest) => {
  let currentNode = tree;

  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }

    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}

// O (n) T & S
// calculate individual branch sums and return in array!
const branchSums = (root) => {
  // create variable to hold sums
  let sums = [];
  // call recursive function
  calculateBranchSums(root, 0, sums);
  // when it is finished, return array of sums
  return sums;
};

// function taking in root node, currentSum, and sums array
const calculateBranchSums = (node, currentSum, sums) => {
  // if no branches
  if (!node) return;
  
  // create new variable holding the current sum + the current node.value
  
  const newCurrentSum = currentSum + node.value;
  // if no more children nodes,
  if (!node.left && !node.right) {
    // push newCurrentSum into the sums array
    sums.push(newCurrentSum);
    return;
  }
  
  // recursively loop through and visit the children branches of the tree.
  calculateBranchSums(node.left, newCurrentSum, sums);
  calculateBranchSums(node.right, newCurrentSum, sums);
}


// O (n) T | O (height) S
// node depths Binary Tree!

// recursive approach
const nodeDepths = (root, depth = 0) => {
  if (root === null) return 0;
  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}

// iterative approach
const rootDepths = (root) => {
  let sumOfDepth = 0; 
  // create a stack
  const stack = [{node: root, depth: 0}];

  while (stack.length > 0) {
    const {node, depth} = stack.pop();
    if (node === null) continue;
    sum += depth;
    stack.push({node: node.left, depth: depth + 1})
    stack.push({node: node.right, depth: depth + 1})
  }

  return sumOfDepth;
}

// invert binary tree iterative
const invertBinaryTree = (tree) => {
  // fifo so use a queue 
  let queue = [tree];
  // loop through while queue has values
  while (queue.length) {
    // take first value
    let current = queue.shift()
    // if current is empty continue for one iteration
    if (current === null) continue;
    // sort tree
    swapLeftAndRight(current)
    // push left and right side into queue
    queue.push(current.left)
    queue.push(current.right)
  }
}

// invert binary tree recursively
const invertBinaryTreeRec = (tree) => {
  // base case: if tree is empty, return
  if (tree === null) return;
  // sort
  swapLeftAndRight(tree);
  // recursively call left and right inversion
  invertBinaryTreeRec(tree.left);
  invertBinaryTreeRec(tree.right);
}

const swapLeftAndRight = (tree) => {
  // create variable for one side
  const left = tree.left;
  // set left = right
  tree.left = tree.right;
  // set right = left variable!
  tree.right = left;
}
// iterative | O(height) T | O(1) S
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  if (node.right !== null) return getLeftMostChild(node.right);

  return getRightMostParent(node);
}

function getLeftMostChild(node) {
  let currentNode = node;
  while (currentNode.left !== null) {
    currentNode = currentNode.left;
  }
  return currentNode
}

function getRightMostParent(node) {
  let currentNode = node;
  while (currentNode.parent !== null && currentNode.parent.right === currentNode) {
    currentNode = currentNode.parent
  }
  return currentNode.parent;
}
