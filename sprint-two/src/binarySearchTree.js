var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;

  _.extend(tree, bstMethods);

  return tree;
};

var bstMethods = {};

//accepts value and places in the tree in the correct position
bstMethods.insert = function (newNode) {
  if (newNode < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(newNode);
    }
    this.left.insert(newNode);
  } else if (newNode > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(newNode);
    }
    this.right.insert(newNode);
  }
  
  //console.log(JSON.stringify(this));
};

bstMethods.contains = function (value) {
  //want to find if value equals this.value
  var findValue = value;
  var firstTree = this;
  //console.log('tree in contain \n' + JSON.stringify(this));
  
  var valueFound = false;
  var traverseTree = function(node, findValue) {
    //console.log('This is node inside recursion \n' + JSON.stringify(node));
    if (findValue < node.value && node.left !== null) {
      //go left of the tree
      traverseTree(node.left, findValue);
    } else if (findValue > node.value && node.right !== null) {
      //go right of the tree
      traverseTree(node.right, findValue);
    } else if (findValue === node.value) {
      //if found change valueFound to true;
      valueFound = true;
    }
  };
  
  traverseTree(firstTree, findValue);
  return valueFound;
  //return true.. if value is contained in tree
    // else return false.. if value is not in tree
};

bstMethods.depthFirstLog = function (cb) {
  //accepts a callback and executes it on every value contained in the tree
  var doSomething = cb;
  var firstTree = this;
  var target = function(node, func) {
    //do callback on each node
    console.log(typeof func);
    func(node.value);
    //if left node exists recurse again through left node
    if (node.left !== null) {
      target(node.left, func);
    }
    //if right node exists recurse again through right node
    if (node.right !== null) {
      target(node.right, func);
    }
  };
    
  target(firstTree, doSomething);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
