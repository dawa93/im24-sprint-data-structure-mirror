class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  insertNode(value) { //insertNode(value) - 트리에 노드를 추가합니다.
    //변수를 만들고, 트리노드를 또 만들어서
    //이 트리노드가 칠드런안에 들어가게
    let temp = new TreeNode(value);
    this.children.push(temp);
  }

  contains(value) {//contains(value) - 트리에 해당 노드가 존재하는지 여부(boolean)
    // 맨처음 만든 노드.value 가 있으면 트루
    if (this.value === value) {
      return true;
    }
    for (let el of this.children) {
      if (el.contains(value)) {
        return true;
      }
    } return false;
  }
}




//   if (this.children[i].value === value) {
//     return true;
//   } else {
//     if (this.children[i].children) {
//       let temp = this.children[i].children;
//       for (let el of temp) {
//         el.contains(value);
//       }
//     }
//   }
//   return false;
// }


//재귀
// 만약 칠드런이 없다? => 펄스
// 만약 칠드런이 있다? 
// 칠드런마다 다시 검사 ->  value가 있으면 트루
// 아래 칠드런이 없는 leaf일때까지 검사
//모든 리프에 없다? 펄스

module.exports = TreeNode;
