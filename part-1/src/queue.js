class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return Object.keys(this.storage).length;
    // let sizeSum = this.rear - this.front;
    // return (sizeSum >= 0) ? sizeSum : 0;
    // rear가 아니라, 객체의 pror의 갯수가 return 되어야한다.
    // 객체의 prop의 갯수를 세는 methods는?

  }

  enqueue(element) {
    this.rear++;
    this.storage[this.rear] = element;
    // rear + 1에 element가 추가되어야한다.

  }

  dequeue() {
    this.front++;
    if (this.front > this.rear) {
      this.front = this.rear;
    }
    let temp = this.storage[this.front];
    // if (this.storage.hasOwnProperty('this.front')) {
    delete this.storage[this.front];
    return temp;

    // front가 빠지고, front+1이 새로운 front가 된다.
  }
}

module.exports = Queue;


