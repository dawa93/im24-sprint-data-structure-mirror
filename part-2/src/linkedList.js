class Node {
  constructor(value) {
    this.value = value; //한 노드의 벨류
    this.next = null; //한 노드가 가르치는 다음 노드
  }
}

class LinkedList {
  constructor() {
    this.head = null; //빈 리스트가 아니라면 head는 항상 값을 가진다.
    this.tail = null; //마지막 노드의 tail은 항상 null
    this._size = 0; //노드가 추가되면 사이즈가 ++, 노드가 삭제되면 사이즈가 --
  }

  addToTail(value) {
    let newNode = new Node(value); //새로운 노드를 생성한다.
    if (this._size === 0) { // 만약 사이즈가 0이라면 (리스트에 노드가 하나도 없으면)
      this.head = newNode; // 방금 생성한 노드를 첫 노드로 만든다.
    } else { //만약 기존에 노드가 있었다면
      this.tail.next = newNode; // 마지막 테일이 가르치던 next가 null에서 새로운 노드로 향하고
    }
    this.tail = newNode; // 마지막 노드는 새로만든 노드가 된다.
    this._size++;
    //{value:'1' tail:null} -> {value'1' tail:다음노드} {value'2',tail:null} 이렇게
  }

  remove(value) {
    if (this.head.value === value) { //만약 지우고자 하는 노드가 헤드라면 
      let temp = this.head;          //헤드값을 임시로 담아주고
      this.head = this.head.next;    //head의 다음 노드가 새로 head가 된다. 
      this._size--;
      return temp;   // 지운 노드를 출력(이전 head 노드는 아무도 지정하지 않기 때문에 둥둥 떠다님)
    }
    //value가 중간 어딘가 있다면?
    let realHead = this.head;   //변수를 하나 잡아준다
    while (realHead.next.value !== value) { //while문으로 value를 가지고있는 노드를 찾아서
      realHead = realHead.next;   //아래에서 그 전 노드의 next에 이 노드의 next(next의next에 연결한다)
    }
    this._size--;

    if (realHead.next === this.tail) { //만약, value를 가진 노드가 tail이라면?
      let result = realHead.next;      // 마지막 노드를 변수로 잡고
      this.tail = realHead;            // 마지막 전 노드를 tail로 바꿔준다
      realHead.next = null;            // 그리고 tail이기 때문에 그다음 연결골리르 끊는다.
      return result;
    }

    let result = realHead.next;
    realHead.next = realHead.next.next;
    return result;
  }

  getNodeAt(index) {//만약 인덱스 넘버가 사이즈보다 크면 undefined를 리턴한다
    if (index > this._size) {
      return undefined;
    }

    if (index === 0) { //만약 인덱스 번혿가 0이면 head 노드를 출력한다.
      return this.head;
    }

    let result = this.head;
    for (let i = 0; i < index; i++) { //for문으로 인덱스 넘버가 될때까지 돌린다.
      result = result.next;  //해당 노드가 될때까지 다음 노드를 돌린다
    }
    return result;  //해당 노드를 출력
  }

  indexOf(value) {
    let head = this.head;
    for (let i = 0; i < this._size; i++) { //끝까지 돌린다.
      if (head.value === value) {  //중간에 벨류가 같으면 i의 숫자를 출력
        return i;
      }
      head = head.next;
    }
    return -1;  //아무것도 없으면 -1 출력
  }

  contains(value) {
    let result = false;
    let head = this.head;

    for (let i = 0; i < this._size; i++) { //false값을 기본으로 주고
      if (head.value === value) {  //모든 노드를 살펴보며, value값과 동일한 노드가 있으면 result를 true로 바꾼다
        result = true;
      }
      head = head.next;
    }

    return result; //출력
  }

  size() {
    return this._size;
  }
}

module.exports = LinkedList;
