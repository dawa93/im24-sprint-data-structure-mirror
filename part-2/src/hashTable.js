const LimitedArray = require('./helpers/limitedArray');
const hashFunction = require('./helpers/hashFunction');

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
