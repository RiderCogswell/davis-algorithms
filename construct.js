const e = require("express");

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // recursive
  insertRec(value) {
    // if value is greater than current value, work on left side
    if (value < this.value) {
      // if left node is empty
      if (this.left === null) {
        // set left as a new BST value
        this.left = new BST(value)
      } else {
        // recursively call insert on left node
        this.left.insertRec(value)
      }
      // else, work on right
    } else {
      // if right node is null
      if (this.right === null) {
        // set right as new BST value
        this.right = new BST(value)
      } else {
        // recursively call insert on right node
        this.right.insertRec(value)
      } 
      
  
    }
    // return tree
    return this;
  }

  // iterative
  insertIt(value) {
    let currentNode = this;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }

    return this;
  }

  // recursive
  containsRec(value) {
    // if input value is smaller than current value
    if (value < this.value) {
      // if left node is empty
      if (this.left === null) {
        return false;
      } else {
        // perform contains(value) on this.left
        return this.left.containsRec(value);
      }
      // if input value is larger than current value
    } else if (value > this.value) {
      // if right node is empty
      if (this.right === null) {
        return false;
      } else {
        // perform contains func on right node
        return this.right.containsRec(value)
      }
      // if value matches return true
    } else {
      return true;
    }
  }
}