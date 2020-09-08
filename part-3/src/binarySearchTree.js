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
    let childTree = new BinarySearchTreeNode(value);
    // value 가 this.value(=root value) 작으면 left
    // value 가 this.value(=root value) 크면 right
    if (value < this.value) {
      if (this.left === null) {
        this.left = childTree;
      } else this.left.insert(value);
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = childTree;
      } else this.right.insert(value);
    }
  }

  contains(value) {
    // 만약에 this.value 가 value 면, 리턴을 T
    if (this.value === value) {
      return true;
    }
    // 만약에 value가 this.value  작고, this. left가 null이 아니면 ,
    // return this.left.contains(value)를 한다.
    if (value < this.value && this.left !== null) {
      return this.left.contains(value);
    }
    // 만약에 value가 this.value  크고, this.right가 null이 아니면 ,
    // return this.right.contains(value)를 한다.
    if (value > this.value && this.right !== null) {
      return this.right.contains(value);
    }
    //만약에 다 아니면 , return F를 한다.
    return false;
  }

  inorder(callback) {
    //  inorder(callback) - 이진 탐색 트리를 중위순회 합니다.
    //this.left를 보고 -> left에 left가 있으면 쭉쭉 가야겠죠? -> 언제까지? left가 null 일때까지?
    if (this.left !== null) {
      this.left.inorder(callback);
      //왼쪽이 더 있는경우 어떻게 해야하는지 생각.
    }
    callback(this.value);
    //this를 보고
    //this.right를 본다
    if (this.right !== null) {
      this.right.inorder(callback);
    }
  }
}

module.exports = BinarySearchTreeNode;
