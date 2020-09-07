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

  contains(node) {
    if (this.nodes[node]) {
      return true
    } return false
  }

  // removeNode(node) {

  // }

  hasEdge(fromNode, toNode) {
    if (this.nodes[fromNode]["edges"][`${toNode}`] === true && this.nodes[toNode]["edges"][`${fromNode}`] === true) {
      return true;
    } return false;
  }

  addEdge(fromNode, toNode) {
    this.nodes[fromNode]["edges"][`${toNode}`] = true;
    this.nodes[toNode]["edges"][`${fromNode}`] = true;
  }

  removeEdge(fromNode, toNode) {
    delete this.nodes[fromNode]["edges"][`${toNode}`];
    delete this.nodes[toNode]["edges"][`${fromNode}`];
  }
}


module.exports = Graph;
