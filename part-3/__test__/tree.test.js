const TreeNode = require('../src/tree');

describe('tree', function() {
  let rootNode;

  beforeEach(function() {
    rootNode = new TreeNode(null);
  });

  it('should have required methods and variables', function() {
    expect(rootNode).toHaveProperty('addChild');
    expect(rootNode).toHaveProperty('contains');
    expect(rootNode).toHaveProperty('value');
  });

  it('should add children to the tree', function() {
    rootNode.addChild(5);
    expect(rootNode.children[0].value).toEqual(5);
  });

  it('should return true for a value that the tree contains', function() {
    rootNode.addChild(5);
    expect(rootNode.contains(5)).toEqual(true);
  });

  it('should return false for a value that was not added', function() {
    rootNode.addChild(5);
    expect(rootNode.contains(6)).toEqual(false);
  });

  it("should be able to add children to a tree's child", function() {
    rootNode.addChild(5);
    rootNode.addChild(6);
    rootNode.children[0].addChild(7);
    expect(childNode.children.length).toEqual(1);
    expect(childNode.contains(7)).toEqual(true);
  });

  it('should correctly detect nested children', function() {
    rootNode.addChild(5);
    rootNode.addChild(6);
    rootNode.children[0].addChild(7);
    rootNode.children[1].addChild(8);
    expect(rootNode.contains(7)).toEqual(true);
    expect(rootNode.contains(8)).toEqual(true);
  });
});
