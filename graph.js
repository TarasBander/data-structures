// Example creating Graph with 10 Vertices and 8 Edges

class Graph {
    constructor() {
      this.nodes = {};
    }
  
    addNode(value) {
      this.nodes[value] = [];
    }
  
    addEdge(node1, node2) {
      this.nodes[node1].push(node2);
      this.nodes[node2].push(node1);
    }
  
    dfs(startNode, visited = {}) {
      if (!this.nodes[startNode]) {
        return;
      }
  
      visited[startNode] = true;
      console.log(`Visit vertex ${startNode}`);
  
      this.nodes[startNode].forEach(neighbor => {
        if (!visited[neighbor]) {
          this.dfs(neighbor, visited);
        }
      });
    }
  }
  
  // creating Graph
  const graph = new Graph();
  
  // adding Vertices
  for (let i = 1; i <= 10; i++) {
    graph.addNode(i);
  }
  
  // adding edges
  graph.addEdge(1, 2);
  graph.addEdge(1, 3);
  graph.addEdge(2, 4);
  graph.addEdge(2, 5);
  graph.addEdge(3, 6);
  graph.addEdge(3, 7);
  graph.addEdge(4, 8);
  graph.addEdge(4, 9);
  
  console.log('deep search');
  graph.dfs(1);
  