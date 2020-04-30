/* Undirected Graph */
class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node] = this.nodes[node] || {
      edges: {},
    };
  }

  contains(node) {}

  removeNode(node) {}

  hasEdge(fromNode, toNode) {}

  addEdge(fromNode, toNode) {}

  removeEdge(fromNode, toNode) {}
}

module.exports = Graph;
