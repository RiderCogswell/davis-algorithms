const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split('  ');

const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['LIM', 'BKK'],
]

// the graph expressed as an adjacency list
// map is often a better option than a regular object
const adjacencyList = new Map();

// add node on graph
function addNode(airport) {
  // sets the airport to the adjacency list and initializes it with an empty array
  adjacencyList.set(airport, []);
}

// add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach(route => addEdge(...route))

console.log(adjacencyList)

// BFS
function bfs(array) {
  const nodes = [array]

  while (nodes.length > 0) {
    // shift node off of the front
    const current = nodes.shift();
    // push current node value into array
    array.push(current.value)
    // push each individual child into the nodes
    nodes.push(...current.children)
  }
  // return array
  return array;
}

// DFS |  O(n + edges) T | O(n) S
function dfs(array) {
  // push node values into the array
  array.push(this.value);

  // loop through and perform a dfs on each child
  this.children.forEach(child => child.dfs(array));
  // return array
  return array
}
