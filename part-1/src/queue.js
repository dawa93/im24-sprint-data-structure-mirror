class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return Object.keys(this.storage).length;
    // let sizeSum = this.rear - this.front;
    // return sizeSum
    // 둘 다 통과된다. 
  }

  enqueue(element) {
    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    }
    this.rear++;
    this.storage[this.rear] = element;
    // rear + 1에 element가 추가되어야한다.

  }

  dequeue() {
    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
      return 0;
    }
    this.front++
    let temp = this.storage[this.front];
    delete this.storage[this.front];
    return temp;

    // front가 빠지고, front+1이 새로운 front가 된다.
  }
}

module.exports = Queue;


