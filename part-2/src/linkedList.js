class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addToTail(value) {}

  remove(value) {}

  getNodeAt(index) {}

  contains(value) {}

  indexOf(value) {}

  size() {}
}

module.exports = LinkedList;
