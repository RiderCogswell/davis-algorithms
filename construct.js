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

  // iterative
  containsIt(value) {
    // make current var with this refering to the tree
    let currentNode = this;
    // while currentNode has a value
    while (currentNode !== null) {
      // if value less than the currentNode value
      if (value < currentNode.value) {
        // set current node to currentNode.left
        currentNode = currentNode.left;
      // if value greater than current value
      } else if (value > currentNode.value) {
        // set current node as right node
        currentNode = currentNode.right;
        // if currentNode.value is equal to value
      } else {
        // return true
        return true;
      }
    }
    // if not return true
    return false;
  }

  // recursive
  removeRec(value, parent = null) {
    // if removing value is less than current value
    if (value < this.value) {
      // if left node isnt empty
      if (this.left !== null) {
        // remove value and give node new  parent with current node (this)
        this.left.removeRec(value, this)
      }
      // if removing value is greater than current value
    } else if (value > this.value) {
      // if right node isnt empty
      if (this.right !== null) {
        // remove value and give it a new parent
        this.right.removeRec(value, this)
      }
      // if input value === current value
    } else {
      // if both left and right nodes are not null 
      if (this.left !== null && this.right !== null) {
        // set current value = right branches smallest value
        this.value = this.right.getMinValueRec();
        // the right node is removed and given a new parent
        this.right.removeRec(this.value, this)
        // if parent is empty (been removed)
      } else if (parent === null) {
        // rearrange tree!!!!
        // if left node isnt empty
        if (this.left !== null) {
          // set current value equal to left nodes value
          this.value = this.left.value;
          // set right nodes  equal to current right nodes, left node
          this.right = this.right.left;
          // set left node equal to current rights right node
          this.left = this.right.right;
          // same as above but on opposite side
        } else if (this.right !== null) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else {
        // if both left and right nodes, and parent is null, its a single node tree so do nothing
        }
        // if parent.left equals currentnode
      } else if (parent.left === this) {
        // if currentnode.left isnt empty replace parent.left with currentNode.left, else with current node.right
        parent.left = this.left !== null ? this.left : this.right;
      } else if (parent.right === this) {
        // if currentnode.left isnt empty replace parent.right  with currentNode.left, else with current node.right
        parent.right = this.left !== null ? this.left : this.right;
      }
    }
    // return tree
    return this;
  }

  // recursive
  getMinValueRec() {
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.getMinValueRec();
    }
  }

  // iterative
  getMinValueIt() {
    let currentNode = this;
    // while currentNode.left has a value
    while (currentNode.left !== null) {
      // set currentNode as left node
      currentNode = currentNode.left
    }
    // return current nodes value (min value)
    return currentNode.value;
  }
}