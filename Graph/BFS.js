const Queue = require("../LinkedList/QueueLinkedList");

const output = [];
// 2차원 배열 그래프 
const graph = Array.from(new Array(10), (x) => new Array(10).fill(0))
// 방문 체크
const visited = new Array(10).fill(0);
// 그래프 간선 데이터
const edges = [
    [1, 2, 3],
    [0, 4, 5],
    [0, 5, 6],
    [0, 7, 8],
    [1],
    [1, 2],
    [2],
    [3],
    [3, 9],
    [8]
]
// 초기화 되어 있는 그래프 간선 이어주기
edges.forEach((edge, index) => {
    edge.forEach((vertex) => {
        graph[vertex][index] = 1
        graph[index][vertex] = 1
    })
})

const BFS = (startNode) => {
    const queue = new Queue()
    queue.enqueue(startNode)
    visited[startNode] = 1;
    output.push(startNode);

    while(queue.size() !== 0){
        const currentNode = queue.dequeue();
        edges[currentNode].forEach((node) => {
            if(visited[node] === 0){
                queue.enqueue(node);
                visited[node] = 1;
                output.push(node)
            }
        })
    }
}

BFS(0);
console.log(output)