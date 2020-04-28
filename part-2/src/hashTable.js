const LimitedArray = require('./helpers/limitedArray');
const hashFunction = require('./helpers/hashFunction');

class HashTable {
  constructor() {
    this._limit = 8;
    this._storage = LimitedArray(this._limit);
  }

  insert(key, value) {
    const index = hashFunction(key, this._limit);
    // TODO: write something here...
    console.log(index);

    return;
  }

  retrieve(key) {
    const index = hashFunction(key, this._limit);
    // TODO: write something here...

    return;
  }

  remove(key) {
    const index = hashFunction(key, this._limit);
    // TODO: write something here...

    return;
  }
}

module.exports = HashTable;
