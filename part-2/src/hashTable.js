const LimitedArray = require('./helpers/limitedArray');
const hashFunction = require('./helpers/hashFunction');
// 위 문법은 helpers 폴더에 있는 limitedArray와 hashFunction을 불러오는 문법입니다.
// 위와 같이 require를 사용해서 다른 파일로부터 함수 등을 불러오는 작업은 이후에 따로 설명합니다.

class HashTable {
  constructor() {
    this._size = 0;
    this._limit = 8;
    this._storage = LimitedArray(this._limit);
  }

  insert(key, value) {
    const index = hashFunction(key, this._limit);
  }

  retrieve(key) {
    const index = hashFunction(key, this._limit);
  }

  remove(key) {
    const index = hashFunction(key, this._limit);
  }

  _resize(newLimit) {}
}

module.exports = HashTable;
