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