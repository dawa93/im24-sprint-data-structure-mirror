class Stack {
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  size() {
    return this.top;
  }

  push(element) {
    this.storage[this.top] = element;
    this.top++;
  }

  pop() {
    if (this.top === 0) {
      return;
    }
    this.top--;
    let gonnaDelete = this.storage[this.top];
    delete this.storage[this.top];
    return gonnaDelete;
  }
}
module.exports = Stack;

// 이전 코드

// constructor() {
//   this.storage = {};
//   this.top = 0;
// }

// size() {
//   return this.top;
// }

// push(element) {
//   this.top++;
//   this.storage[this.top] = element;
// }

// pop() {
//   if (this.top === 0) {
//     return 0;
//   }
//   let temp = this.storage[this.top];
//   delete this.storage[this.top];
//   this.top--;
//   return temp;
// }
