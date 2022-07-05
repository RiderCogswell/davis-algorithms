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
function bfs(start) {
  const queue = [start]

  while (queue.length > 0) {
    
  }
}

