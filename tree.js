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

  calculateBranchSums(node.left, newCurrentSum, sums);
  calculateBranchSums(node.right, newCurrentSum, sums);
}

