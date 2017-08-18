

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //var bucket = this._storage.get(index);
  var emptyBucket = [];
  if (this._storage.get(index) === undefined) {
    console.log('insert with no index');
    emptyBucket.push([k, v]);    
    this._storage.set(index, emptyBucket);
  } else {
    //overwrite value if key is the same
    var bucket = this._storage.get(index);
    for (var tuple = 0; tuple < bucket.length; tuple++) {
      if (bucket[tuple][0] === k) {
        bucket[tuple][1] = v;
      } else {
        bucket.push([k, v]);
      }
    }
    console.log('this is bucket\n' + JSON.stringify(bucket) + '\n' + 'this is this._storage\n' + JSON.stringify(this._storage.get(index)));
  }


  
    console.log('this is bucket\n' + JSON.stringify(bucket) + '\n' + 'this is this._storage\n' + JSON.stringify(this._storage.get(index)));
   // if line 10 returns nothing, then set a bucket array at that index
  // set a new bucket array, push tuple [k, v] into bucket
  // else if it is there, then push tuple [k, v] into bucket
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var tuple = 0; tuple < bucket.length; tuple++) {
    if (bucket[tuple][0] === k) {
      bucket.splice(tuple, 1);
    }
  }
};

var hash = new HashTable();

/*
 * Complexity: What is the time complexity of the above functions?
 */


