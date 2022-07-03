class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // recursive
  insert(value) {
    // if value is greater than current value, work on left side
    if (value > this.value) {
      // if left node is empty
      if (this.left === null) {
        // set left as a new BST value
        this.left = new BST(value)
      } else {
        // recursively call insert on left node
        this.left.insert(value)
      }
      // else, work on right
    } else {
      // if right node is null
      if (this.right === null) {
        // set right as new BST value
        this.right = new BST(value)
      } else {
        // recursively call insert on right node
        this.right.insert(value)
      } 
      
    // return tree
    return this;
    }
  }
}