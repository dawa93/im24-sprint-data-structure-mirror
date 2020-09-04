class Node {
  constructor(value) {
    this.value = value; //한 노드의 벨류
    this.next = null; //한 노드가 가르치는 다음 노드
  }
}

class LinkedList {
  constructor() {
    this.head = null; //head가 null이면 안된다.
    this.tail = null; //마지막 노드의 tail은 항상 null
    this._size = 0; //노드가 추가되면 사이즈가 ++, 노드가 삭제되면 사이즈가 --
  }

  addToTail(value) {
    let newNode = new Node(value);
    if (this._size === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this._size++;
  }


  remove(value) {
    if (this.head.value === value) {
      let temp = this.head;
      this.head = this.head.next;
      this._size--;
      return temp;
    } // 만약 value가 1번이면 문제 없음


    let realHead = this.head;
    while (realHead.next.value !== value) {
      realHead = realHead.next;
    }

    this._size--;

    if (realHead.next === this.tail) {
      let result = realHead.next;
      this.tail = realHead;
      realHead.next = null;
      return result;
    }

    let result = realHead.next;
    realHead.next = realHead.next.next;
    return result;
  }


  // getNodeAt(index) { }

  // contains(value) { }

  // indexOf(value) { }

  size() {
    return this._size;
  }
}

module.exports = LinkedList;
