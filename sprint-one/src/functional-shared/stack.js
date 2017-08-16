var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  //var count = 0;
  storage.count = 0;
  
  _.extend(storage, stackMethods);
  
  return storage;
};

var stackMethods = {};


stackMethods.push = function (value) {
  this[this.count] = value;
  this.count++;
  console.log('push: ' + JSON.stringify(this));
};

stackMethods.pop = function () {
  this.count--;  
  var result = this[this.count];
  delete this[this.count];
  return result;
};

stackMethods.size = function () {
  if (this.count < 0) {
    return 0;
  } 
  return this.count;
};