var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //declare new variable for the input value
    var nodeValue = value;
    //if there is no head (means there is nothing in linked list)
    if (this.head === null) {
      //point the head reference to be a new node with the input value
      this.head = Node(nodeValue);
      //point the tail reference to the head reference because there is only one node
      this.tail = this.head;
    } else {  //else if there is a head reference
      //tail is now a new node with it's value equaling the input value
      this.tail = Node(nodeValue);
      //makes the head's next property equal to the new tail
      this.head.next = this.tail;
    }
  };

  list.removeHead = function() {
    //check to see if the list has a head and next value
    if (this.head && this.head.next) {
      //repoint head to the next item
      this.head = this.head.next;
    }   
    // creates a new variable name to refer to the head value 
    var headValue = this.head.value;
    //just returns headvalue 
    return headValue;
  };

  //searches to see if list contains the target 
  list.contains = function(target) {
    // creates a variable and sets it to false by default
    var targetFound = false;
    //checks current node for a value equal to target value
    var checkValue = function (node, target) {
      //sets target to its own variable 
      var targetValue = target;
      //iterate through current node
      for (var key in node) {
        //check to see if node value is equal to target
        if (node.value === targetValue) {
          //target is changed to true
          targetFound = true;
        }
        //check to see if key equals next and if there is no node
        if (key === 'next' && node.key !== null) {
          //recurses checkValue function on next node and target
          checkValue(node.next, targetValue);
        }
      }
    };
    //calls the checkValue function to run
    checkValue(this.head, target);
    //returns if targetFound equals true or false
    return targetFound;
  };
  //returns list
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


