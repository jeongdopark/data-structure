class PriorityQueue {
    constructor() {
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({ val, priority });
      this.sort();
    }
    dequeue() {
      return this.values.shift();
    }
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    }
    isEmpty() {
      return this.values.length === 0;
    }
  }
  
  function dijkstra(graph, start) {
    const distances = {};
    const pq = new PriorityQueue();
    const previous = {};
    let path = [];
  
    // 초기화
    for (let vertex in graph) {
      if (vertex === start) {
        distances[vertex] = 0;
        pq.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        pq.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
  
    while (!pq.isEmpty()) {
      let smallest = pq.dequeue().val;
  
      if (!graph[smallest]) continue;
      for (let neighbor in graph[smallest]) {
        let nextNode = neighbor;
        let candidate = distances[smallest] + graph[smallest][nextNode];
        if (candidate < distances[nextNode]) {
          distances[nextNode] = candidate;
          previous[nextNode] = smallest;
          pq.enqueue(nextNode, candidate);
        }
      }
    }
    
    return { distances, previous };
  }
  
  // 예제 그래프
  const graph = {
    A: { B: 4, C: 2 },
    B: { A: 4, C: 5, D: 10 },
    C: { A: 2, B: 5, D: 3, E: 6 },
    D: { B: 10, C: 3, E: 1 },
    E: { C: 6, D: 1 }
  };
  
  console.log(dijkstra(graph, 'A'));
  