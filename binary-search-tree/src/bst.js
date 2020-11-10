class BSTNode {
  constructor(element) {
    this.element = element;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(element) {
    let node = this.root;

    // root
    if (this.root == null) {
      this.root = new BSTNode(element);
      this.size += 1;
      return true;
    }

    while (true) {
      if (node.element.key == element.key) {
        return false;
      } else if (element.key > node.element.key) {
        if (node.right == null) {
          node.right = new BSTNode(element);
          this.size += 1;
          return true;
        } else {
          node = node.right;
        }
      } else {
        if (node.left == null) {
          node.left = new BSTNode(element);
          this.size += 1;
          return true;
        } else {
          node = node.left;
        }
      }
    }
  }

  find(key) {
    let node = this.root;
    while (node) {
      if (node.element.key == key) {
        return true;
      }
      if (key > node.element.key) {
        node = node.right;
      } else {
        node = node.left;
      }
    }
    return false;
  }

  remove(key) {}
  print() {}
}
