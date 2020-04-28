const LinkedList = require('../src/linkedList');

describe('linkedList', function() {
  let linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have required methods', function() {
    expect(linkedList).toHaveProperty('add');
    expect(linkedList).toHaveProperty('addAt');
    expect(linkedList).toHaveProperty('remove');
    expect(linkedList).toHaveProperty('contains');
    expect(linkedList).toHaveProperty('indexOf');
  });

  it('should add a new node to tail', function() {
    linkedList.add(4);
    linkedList.add(5);
    expect(linkedList.get(0)).toEqual(4);
    expect(linkedList.get(1)).toEqual(5);
  });

  it('should add a new node to a given index in the list', function() {
    linkedList.add(4);
    linkedList.add(5);

    linkedList.addAt(1, 6);
    expect(linkedList.get(0)).toEqual(4);
    expect(linkedList.get(1)).toEqual(6);
    expect(linkedList.get(2)).toEqual(5);
  });

  it('should remove the node from the list', function() {
    linkedList.add(4);
    linkedList.add(5);
    expect(linkedList.get(0)).toEqual(4);
    linkedList.remove(4);
    expect(linkedList.get(0)).toEqual(5);
  });

  it('should return the value of the given index in the list', function() {
    linkedList.add(10);
    linkedList.add(20);
    linkedList.add(30);
    expect(linkedList.get(1)).toEqual(20);
  });

  it('should return undefined if the value does not exist', function() {
    linkedList.add(10);
    linkedList.add(20);
    linkedList.add(30);
    expect(linkedList.get(10)).toEqual(undefined);
  });

  it('should contain a value that was added', function() {
    linkedList.add(4);
    linkedList.add(8);
    linkedList.add(12);
    expect(linkedList.contains(4)).toEqual(true);
    expect(linkedList.contains(8)).toEqual(true);
    expect(linkedList.contains(13)).toEqual(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.add(4);
    linkedList.add(5);
    linkedList.remove(4);
    expect(linkedList.contains(4)).toEqual(false);
  });

  it('should return the index of value in the list', function() {
    linkedList.add(4);
    linkedList.add(5);
    linkedList.add(6);
    expect(linkedList.indexOf(6)).toEqual(2);
  });

  it('should return -1 if the value does not exist', function() {
    linkedList.add(4);
    linkedList.add(5);
    linkedList.add(6);
    expect(linkedList.indexOf(7)).toEqual(-1);
  });

  it('should return the size of list', function() {
    linkedList.add(5);
    linkedList.add(6);
    linkedList.add(7);
    linkedList.add(8);
    expect(linkedList.size()).toEqual(4);
  });
});
