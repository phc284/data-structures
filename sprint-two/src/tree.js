var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
 
  _.extend(newTree, treeMethods);  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // push newTree into children array
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var targetFound = false;  
  var checksValue = function(array, target) {
    for (var i = 0; i < array.length; i ++) {
      if (array[i].value === target) {
        targetFound = true;
      }
      checksValue(array[i].children, target);
    }
  };
  checksValue(this.children, target);
  return targetFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
