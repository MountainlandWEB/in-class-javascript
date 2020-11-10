// an undirected graph
class Graph{
  constructor(){
      // Graph has an adjacencyList attribute set as an object
      this.adjacencyList = {}
  
  }

 addVertex(vertex){
   // to avoid overwriting the existing vertex, we need if statement
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
 }
  
 addEdge(vertex1, vertex2){
   // undirected graph is two way connection
   //we push both vertices to each other's array
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
 }
 
 removeEdge(ver1, ver2){
   // two way connection, delete from both arrays
    this.adjacencyList[ver1] = this.adjacencyList[ver1].filter(
       v => v !== ver2
    )  
   this.adjacencyList[ver2] = this.adjacencyList[ver2].filter(
       v => v !== ver1
    )  
 }
  
 removeVertex(vertex){
    // first find all the conncetion, and remove all edges from both parties, 
   // and then delete the vertex from the adjacency list
      let edges = this.adjacencyList[vertex]
      
      for(let edge of edges){
        this.removeEdge(vertex, edge)
      }
   delete this.adjacencyList[vertex]
 }
}
