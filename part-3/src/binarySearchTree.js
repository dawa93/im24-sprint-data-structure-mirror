class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  //        10 (root)
  //     4           14
  //  1   9      13      19
  //            12      15
  // 자식을 최대 2개 가질 수 있다.
  // 왼쪽은 작은값 , 오른쪽이 같거나 큰값
  insert(value) {
    //child 트리는 트리 처럼 재귀
    // let childTree = new BinarySearchTreeNode(value);
    // value 가 this.value(=root value) 작으면 left
    // value 가 this.value(=root value) 크면 right
    if (value < this.value) {
      this.left = value;
    } else {
      this.right = value;
    }
    //
  }

  // contains(value) {}

  // inorder(callback) {}
}

module.exports = BinarySearchTreeNode;
