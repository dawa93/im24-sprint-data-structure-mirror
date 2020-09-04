//
//
//
//
//
//
//

class priorityQueue {
  constructor() {
    (this.storage = {}), (this.rear = 0);
  }

  size() {
    return Object.keys(this.storage).length;
  }

  enqueue(element, priority) {
    this.storage[priority] = element;
    this.front++;
  }

  dequeue() {}
}

module.exports = priorityQueue;
