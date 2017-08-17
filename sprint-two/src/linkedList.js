var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var nodeValue = value;
    //if list is empty
    if (this.head === null) {
      //assign node to head
      this.head = Node(nodeValue);
      this.tail = this.head;
    } else {
     // list.tail = Node(nodeValue);
      //this.next = list.tail;
      this.tail = Node(nodeValue);
      this.head.next = this.tail;
    }
    console.log(JSON.stringify(list));
    console.log('Head value = ' + list.head.value);

    //else add node to the tail
  };

  list.removeHead = function() {
    //console.log(JSON.stringify(this.next));
    if (this.head && this.head.next) {
      // set head.next to new list.head
      this.head = this.head.next;
      // delete head
    }
    var headValue = this.head.value;
    console.log('List when remove head' + JSON.stringify(list));
    console.log('Head value = ' + list.head.value);
    return headValue;
  };

  list.contains = function(target) {
    // check if target is value of any of keys in any nested objects
    // if a value is equal to target
      // return true
    // Figure out how every key in obj is tested

    // recurse through this.head
    for (var key in this.head) {
      if (target === this.head.key) {
        return true;
      }
      if (key === 'next' && this.key !== undefined) {
        this.key.contains(target);
      }
    }
    
    return false;


    // for (var key in list) {
    //   //console.log(list.value);
    //   if (key === 'head') {
    //     if (target === this.value) {
    //       return true;
    //     }
    //     if (key === 'next' && this.key !== undefined) {
    //       this.key.contains(target);
    //     }
    //   }
    // }
    // iterate through the key 'value' of the head and the children
      // check if target value is there
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
