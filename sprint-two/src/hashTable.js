

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (this._storage[index] === undefined) {
    var bucket = [];    
    bucket.push([k, v]);
    this._storage.set(index, bucket);
  } else {
    bucket.push([k, v]);
  }
   // if line 10 returns nothing, then set a bucket array at that index
  // set a new bucket array, push tuple [k, v] into bucket
  // else if it is there, then push tuple [k, v] into bucket
  
  console.log('Hash after insert: ' + JSON.stringify(this));
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  for (var i = 0; i < bucket.length; i ++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var tuple = 0; tuple < bucket.length; tuple ++) {
    if (bucket[tuple][0] === k) {
      bucket.splice(tuple);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


