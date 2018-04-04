function LinkedNode(data, next) {
  this.data = data;
  this.next = next;
}

// generate sample nodes in list
var n1 = new LinkedNode("1", null);
var n2 = new LinkedNode("2", n1);
var n3 = new LinkedNode("3", n2);
var n4 = new LinkedNode("4", n3);
var n5 = new LinkedNode("5", n4);
var n6 = new LinkedNode("6", n5);
var n7 = new LinkedNode("7", n6);


var linked_array = []

var currentNode = n7
// push some elements in list...
for (var i = 0; i < 7; i++) {
  linked_array.push(currentNode.data)
  currentNode = currentNode.next
}

var array_middle = Math.floor(linked_array.length/2)
console.log('Middle element of linked list is - ', linked_array[array_middle])
