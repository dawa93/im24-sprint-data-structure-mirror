class Stack {
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  size() {
    return this.top;
  }

  push(element) {
    this.top++;
    this.storage[this.top] = element;
  }

  pop() {
    if (this.top === 0) {
      return 0;
    }
    let temp = this.storage[this.top];
    delete this.storage[this.top];
    this.top--;
    return temp;
  }
}
module.exports = Stack;
