class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
    return this;
  }
  addEdges(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}

const graph = new Graph();
graph.addVertex(0);
graph.addVertex(3);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(4);
graph.addVertex(6);
graph.addVertex(5);

graph.addEdges(0, 1);
graph.addEdges(0, 2);
graph.addEdges(1, 2);
graph.addEdges(1, 3);
graph.addEdges(2, 4);
graph.addEdges(3, 4);
graph.addEdges(4, 5);
graph.addEdges(5, 6);
console.log(graph);
