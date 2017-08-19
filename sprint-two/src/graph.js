

// Instantiate a new graph
var Graph = function() {
  //var obj = {};
  //creates a storage array
  this.nodeStorage = [];
  //creates an edges array 
  this.edges = [];
  //return obj;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //push node value into storage array
  this.nodeStorage.push(node);
  console.log('This is storage after addNode \n' + JSON.stringify(this.nodeStorage));

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //iterate through storage array
  for (var i = 0; i < this.nodeStorage.length; i++) {
    //returns true if iteration finds node value
    if (this.nodeStorage[i] === node) {
      return true;
    }
  }
  //returns false if node value is not found
  return false;

  //simpler way of finding if the value is in nodeStorage
  //return this.nodeStorage.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //check if node is in storage
  if (this.nodeStorage.indexOf(node) !== -1) { 
    //remove node from storage array
    this.nodeStorage.splice(this.nodeStorage.indexOf(node), 1);
    console.log('This is storage after removeNode ' + node + '\n' + JSON.stringify(this.nodeStorage));
  }
  //debugger;
  var index = 0;
  var edges2 = this.edges;

  var checkEdges = function(array, value) {
    for (var i = 0; i < array.length; i++) { 
      for (var j = 0; j < array[i].length; j++) {
        if (array[i][j] === value) {
          index = i;
          edges2.splice(index, 1);
          checkEdges(edges2, value);
        }
      }
    }
  };
    
  checkEdges(edges2, node);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges.reduce(function(acc, item) {
    if (item[0] === fromNode || item[0] === toNode) {
      if (item[1] === fromNode || item[1] === toNode) {
        acc = true;
      }
    }
    return acc;
  }, false);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
  console.log('This is edges after addEdge \n' + JSON.stringify(this.edges));

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexOfEdge = this.edges.reduce(function(acc, item) {
    if (item[0] === fromNode || item[0] === toNode) {
      if (item[1] === fromNode || item[1] === toNode) {
        acc = item.indexOf();
      }
    }
    return acc;
  }, -1);

  this.edges.splice(indexOfEdge, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodeStorage.length; i++) {
    cb(this.nodeStorage[i]);
  }
};

// var websites = new Graph();
// var facebook = new Graph();

// var list = new Graph();
// list.addNode(4);
// list.addNode(5);
// list.addNode(6);
// list.addNode(7);
// list.addEdge(4,5);
// list.addEdge(5,6);
// list.addEdge(6,7);
// list.addEdge(7,4);





/*
 * Complexity: What is the time complexity of the above functions?
 */


