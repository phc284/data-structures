

// Instantiate a new graph
var Graph = function() {
  this.nodeStorage = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeStorage.push(node);
  console.log('These are the nodes \n' + JSON.stringify(this.nodeStorage));
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodeStorage.length; i++) {
    if (this.nodeStorage[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.nodeStorage.indexOf(node) !== -1) { 
    this.nodeStorage.splice(this.nodeStorage.indexOf(node), 1);
  }
  //remove edges of the nodes we removed
  //iterate through 'edges' array and find if the node is in any of the tuples
    //if in a tuple
      //splice the tuple out 
  console.log('This are nodes after removing ' + node + ': ' + JSON.stringify(this.nodeStorage));
  console.log('This are edges after removing ' + node + ': ' + JSON.stringify(this.edges));
  var index = 0;
  this.edges.forEach(function (tuple) {
    console.log('this is the tuple: ' + JSON.stringify(tuple));
    for (var i = 0; i < tuple.length; i++) {
      if (tuple[i] === node) {
        index = tuple.indexOf();
      }
    }
  });

  this.edges.splice(index, 1);
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

  console.log('These are the edges \n' + JSON.stringify(this.edges));
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //iterate through edges array
    //iterate through each tuple inside array 
    //or stringify item in edges array and compare it to a stringified [fromNode, toNode]
      //find if fromNode and toNode are in the array
        //splice it from this.edges

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

var graph = new Graph();

/*
 * Complexity: What is the time complexity of the above functions?
 */


