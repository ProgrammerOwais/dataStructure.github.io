/**************************************Algorithms Graph Data Structure********************************
 ****** GRAPH => It is a data structure made up of nodes or vertices or circles(in graph) & edg
                 edges or connections or lines (in graph) btw the nodes
       ************************************************************************
        TREE => A special kind of graph which have only one root & only one unique path btw two nodes.
                whereas graph can have multiple roots & multiple paths btw two nodes
       ************************************************************************************************/

/*///////////////////////////////////      
                                                        (A)-------(B)
                                                        |         /
                                                        |        /
                                                        |       /
                                                        |     (C)      We will use this graph in all the examples
                                                        |    /   \
                                                        |   /     \
                                                        |  /       \
                                                        (D) -------(E)
                            1) The vertices means circles are nodes
                            2) the edges lines are the connections btw nodes

  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  **************************************************/
//// REPRESENTAtION OF GRAPHS  IN CODE => there are many ways to represent a graph in code depend on
/// what you wanna do with the graph & also it has different time & space complexity
/// some of the ways of graph to represent in code are : ****************************************/////
////////////////////////////////////// 1) Vertices list & edges list implementation\\\\\\\\\\\\\\\\\\\\\\

/*
 *time complexity is to find two adjacent nodes is O(e) e means number of edges
 * time complexity to check if two nodes are connected  is : O (e)
 * space complexity is : O(v+e) vertices & edges
 */
const vertices = ["A", "B", "C", "D", "E"];
const edges = [
  ["A", "B"],
  ["A", "D"],
  ["B", "C"],
  ["C", "D"],
  ["C", "E"],
  ["D", "E"],
];

// (node) to  find the adjacent nodes
const findAdjacentNode = (node) => {
  const adjacentNode = [];
  for (let i = 0; i < edges.length; i++) {
    const connectins = edges[i];
    if (edges[i].indexOf(node) !== -1) {
      edges[i].indexOf(node) === 0
        ? adjacentNode.push(connectins[1])
        : adjacentNode.push(connectins[0]);
    }
  }
  return adjacentNode;
};
// console.log("The vertices list & edge list adjacent nodes are :"findAdjacentNode("A"));

// (node1,node2) to check wether the nodes are adjacent or not
const checkAdjacentNodes = (node1, node2) => {
  for (let edge of edges) {
    if (
      (edge.indexOf(node1) === 0 && edge.indexOf(node2) === 1) ||
      (edge.indexOf(node2) === 0 && edge.indexOf(node1) === 1)
    ) {
      return true;
    }
  }
  return false;
};
// console.log("The vertices & edges list is connected True or false : ",checkAdjacentNodes("D", "C"));

///////////////////////////////////// 2) Adjacency Matrix implementation \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/****** It is a 2D array filled out with 1's & 0's where each array(row) represents a node
 * & each of sub-array(columns of that row) represent a connection btw that node
 * 1 means connected & 0 means not connected. i,e adjacencyMatrix[node1][node2]
 * represents whether there is a connection btw node1 & node2.
 * time complexity is to find two adjacent nodes is O(v) v means vertices
 * time complexity to check if two nodes are connected  is : O (1)
 * space complexity is : O(v^2)
 ******/
const vertices1 = ["A", "B", "C", "D", "E"];
const adjacencyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];
// Find the adjacency i,e adjacent nodes
const adjacencyNodes = (node) => {
  const adjacentNode = [];
  const nodeIdx = vertices1.indexOf(node);
  for (let i = 0; i < adjacencyMatrix[nodeIdx].length; i++) {
    if (adjacencyMatrix[nodeIdx][i] === 1) {
      adjacentNode.push(vertices1[i]);
    }
  }
  return adjacentNode;
};
// console.log("The adjacency matrix adjacent nodes are : ", adjacencyNodes("D"));
// check the connections btw two nodes
const vertexidx = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
};
const isConnected = function (node1, node2) {
  //   const nodeidx1 = vertices1.indexOf(node1);
  //   const nodeidx2 = vertices1.indexOf(node2); is same as the below
  const nodeidx1 = vertexidx[node1]; //Accessing the index of the vertices/array
  const nodeidx2 = vertexidx[node2];

  return !!adjacencyMatrix[nodeidx1][nodeidx2];
};
// The time complexity is O(1) the most efficient method in adjacent matrix.
// console.log("is adjacent matrix is connected : ", isConnected("B", "C"));

///////////////////////////////////// #) Adjacency List implementation \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/********** It contains two list
 *          1) list of vertex
 *          2) list of adjacent nodes
 * For every node , store a list of what nodes it's connected to
 * Time complexity to find two adjacent nodes is : O(1)
 * Time complexity to check whether two nodes are connected or not : O(log v) if each adjacent row is sorted
 * space complexity is : O(e) number of edges
 *
 */
class Node {
  constructor(value) {
    this.value = value;
    this.edgeList = [];
  }
  connect(node) {
    this.edgeList.push(node);
    node.edgeList.push(this);
  }
  getAdjacentNodes() {
    return this.edgeList.map((edge) => edge.value);
  }
  isConnected(node) {
    return this.edgeList.map((edge) => edge.value).indexOf(node.value) > -1;
  }
}
class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  add(node) {
    this.nodes.push(node);
  }
}
const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");
let graph1 = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE]);
nodeA.connect(nodeB);
nodeA.connect(nodeD);
nodeB.connect(nodeC);
nodeC.connect(nodeD);
nodeC.connect(nodeE);
nodeD.connect(nodeE);
console.log(nodeA.getAdjacentNodes());
console.log(nodeA.isConnected(nodeC));
