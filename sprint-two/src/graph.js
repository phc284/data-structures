

// Instantiate a new graph
var Graph = function() {
  //var obj = {};
  this.nodeStorage = [];
  this.edges = [];
  //return obj;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeStorage.push(node);
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

  var index = 0;
  this.edges.forEach(function (tuple) {
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

var websites = new Graph();
var facebook = new Graph();

var list = new Graph();


/*
 * Complexity: What is the time complexity of the above functions?
 */


