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

      if (this.left === null) {
        this.left = new BST(value)
      } else {
        this.left.insert(value)
      }
      // else, work on right
    } else {
      if (this.right === null) {
        this.right = new BST(value)
      } else {
        this.right.insert(value)
      } 
      
    return this;
    }
  }
}