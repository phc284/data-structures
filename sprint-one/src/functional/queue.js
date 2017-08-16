// var Queue = function() {

var Queue = function() {
  var someInstance = {};

  var storage = {

  };
 
  var oldest = 1;
  var newest = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[newest] = value;
    newest++;
  };

  someInstance.dequeue = function() {
    if (oldest !== newest) {
      var result = storage[oldest];
      delete storage[oldest];
      oldest++;
    }
    return result;
  };

  someInstance.size = function() {
    return newest - oldest;
  };

  return someInstance;
};