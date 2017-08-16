var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);
  storage.newest = 1;
  storage.oldest = 1;

  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this[this.newest] = value;
  this.newest++;
};

queueMethods.dequeue = function () {
  if (this.newest !== this.oldest) {
    var result = this[this.oldest];
    delete this[this.oldest];
    this.oldest++;
    return result;
  }
};

queueMethods.size = function () {
  return this.newest - this.oldest;
};



