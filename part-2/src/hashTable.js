const LimitedArray = require('./helpers/limitedArray');
const hashFunction = require('./helpers/hashFunction');
// 위 문법은 helpers 폴더에 있는 limitedArray와 hashFunction을 불러오는 문법입니다.
// 위와 같이 require를 사용해서 다른 파일로부터 함수 등을 불러오는 작업은 이후에 따로 설명합니다.
// hashTable.insert('Steven', 'Seagal'); 하면
// retrieve('Steven') => return 'Seagal'이 나와야 한다.


class HashTable {
  constructor() {
    this._size = 0;
    this._limit = 8;
    this._storage = LimitedArray(this._limit);
  }

  insert(key, value) { //주어진 키와 값을 저장합니다. 이미 해당 키가 저장되어 있다면 값을 덮어씌웁니다.
    const index = hashFunction(key, this._limit);
    if (this._storage.get(index) === undefined) {
      let tuple = {};
      tuple[key] = value;
      this._storage.set(index, tuple);
    } else {
      this._storage.get(index)[key] = value;
    }
    this._size++;

    if (this._size / this._limit > 0.75) {
      this._resize(this._limit);
    }
  }
  // console.log(this._storage.get(index));


  retrieve(key) { // 주어진 키에 해당하는 값을 반환합니다. 없다면 undefined를 반환합니다.
    const index = hashFunction(key, this._limit);
    if (!this._storage.get(index).hasOwnProperty(key)) {
      return undefined;
    } return this._storage.get(index)[key];
  }

  remove(key) { //주어진 키에 해당하는 값을 삭제하고 값을 반환합니다. 없다면 undefined를 반환합니다.
    const index = hashFunction(key, this._limit);
    if (!this._storage.get(index).hasOwnProperty(key)) {
      return undefined;
    }
    this._size--;
    let result = this._storage.get(index)[key];
    delete this._storage.get(index)[key];
    return result;

  }

  // _resize(newLimit) {
  //   this._limit = newLimit * 2;
  //   let temp = this._storage;
  //   this._storage = LimitedArray(this._limit);
  //   this._size = 0;

  // for (let el of temp) {
  //   console.log(el);
  // }
}
//해시 테이블의 스토리지 배열을 newLimit으로 리사이징하는 함수입니다. 
//리사이징 후 저장되어 있던 값을 전부 다시 해싱을 해주어야 합니다. 구현 후 HashTable 내부에서 사용하시면 됩니다.

//함수를 구현해 놓고
//인서트와 리무브 리턴 직전에, -> 만약에 사이즈/리미트가 0.75 이상이 되면 
//리사이즈 함수를 실행시키는데 ->0.75 이상이면 곱하기 이



module.exports = HashTable;


