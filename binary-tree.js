// Searching Example

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (!node) {
      return null;
    }

    if (value === node.value) {
      return node;
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }
}

const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(4);
binaryTree.insert(15);
binaryTree.insert(8);
binaryTree.insert(7);

const searchResult = binaryTree.search(5);

if (searchResult) {
  console.log(`Element ${searchResult.value} found in the binary tree.`);
} else {
  console.log(`Element not found in the binary tree.`);
}