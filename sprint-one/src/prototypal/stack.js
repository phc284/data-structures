var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  storage.count = 0;

  return storage;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  this.count--;  
  var result = this[this.count];
  delete this[this.count];
  return result;
};

stackMethods.size = function() {
  if (this.count < 0) {
    return 0;
  }
  return this.count;
};

