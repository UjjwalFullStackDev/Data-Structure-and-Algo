// ! What is Linked List?
// Linked List is a linear data structure made of nodes.
// Each node contains data and a reference (pointer) to the next node.
// Unlike arrays, elements in a linked list are not stored in contiguous memory.

//! Linked List Key Operations:
// append(data) -> Add a new node at the end
// prepend(data) -> Add a new node at the beginning
// delete(data) -> Delete the first node with matching data
// traversal -> Visiting all node sequentially one by one from start to end
// search -> Find if a node with specific value
// print() -> Print all node values
// isEmpty() -> Check if list is empty
// size() -> Return the number of nodes

// ! Real world example ->
// Think of a train: each train car is linked to the next.
// Navigation history in a browser: each page links to the previous/next.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  appendInLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  deleteByValue(dataToDelete) {
    if (!this.head) {
      return;
    } else if (this.head.data === dataToDelete) {
      this.head = this.head.next;
      return;
    } else {
      let current = this.head;
      while (current.next.data !== dataToDelete) {
        current = current.next;
      }
      current.next = current.next.next;
    }
  }

  search(dataSearch) {
    let current = this.head;

      while (current) {
        if(current.data === dataSearch) {
          return true;
        }
        current = current.next;
      }
      return false;
  }

  length() {
    if(this.head === null) {
      return 0
    }
    let current = this.head;
    let counter = 0;
    
    while(current) {
      current = current.next
      counter ++;
    }
    return counter;
  }

  print() {
    if (!this.head) {
      return null;
    } else {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
}

const linkedList = new LinkedList();

linkedList.appendInLast(2);
linkedList.appendInLast(3);
linkedList.appendInLast(4);
linkedList.appendInLast(4);
linkedList.appendInLast(6);
linkedList.appendInLast(7);
// linkedList.print();
// console.log("After delete value 4");
// linkedList.deleteByValue(2);
// linkedList.print();
console.log(linkedList.length())
// console.log(linkedList.search(6))
