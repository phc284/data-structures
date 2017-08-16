var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  

  // Implement the methods below
  someInstance.push = function(value) {
    //add string as a new value to a key in storage
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    size--;
    var result = storage[size];
    delete storage[size];
    return result;
  };

  someInstance.size = function() {
    if (size < 0) {
      return 0;
    }
    return size;
  };

  return someInstance;
};
