var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.oldest = 1;
  this.newest = 1;
};

Queue.prototype.enqueue = function (value) {
  this[this.newest] = value;
  this.newest++;
};

Queue.prototype.dequeue = function () {
  var result = this[this.oldest];
  delete this[this.oldest];
  this.oldest++;
  return result;
};

Queue.prototype.size = function () {
  if (this.newest - this.oldest <= 0) {
    return 0;
  } 
  return this.newest - this.oldest;
};


var GroceryLine = new Queue();