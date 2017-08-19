// create a constructor function for making new trees
var Tree = function(value) {
// create a new tree object
  var newTree = {};
// set a 'value' property to the new tree, and set its value to input value
  newTree.value = value;
// set a 'children' property to new tree, with a value of an empty array
  newTree.children = [];  // fix me
 // extend the methods to each instance of the new tree
  _.extend(newTree, treeMethods);  
 // returns the new tree
  return newTree;
};

// declare a tree methods object (which will contain the methods to be extended to each tree)
var treeMethods = {};

// create a method for adding children to a tree
treeMethods.addChild = function(value) {
  // push newTree into children array
  this.children.push(Tree(value));
};

// creates a contains method to check for existence in tree of a given input 
treeMethods.contains = function(target) {
// sets a default targetFound variable to false
  var targetFound = false; 
// creates a function which takes an array and an input target value 
  var checksValue = function(array, target) {
// iterate through the array found at the 'children' property on each tree
    for (var i = 0; i < array.length; i ++) {
// at each item of the 'children' array, check the 'value' property to see if it's same as target/input
      if (array[i].value === target) {
// if found, update targetFound variable to true
        targetFound = true;
      }
// recurse with the array found at the 'children' property at each item of the array 
      checksValue(array[i].children, target);
    }
  };
// call the checksValue function to kick off the recursion with the tree's children property and the input/target
  checksValue(this.children, target);
// return the default variable with true or false 
  return targetFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
