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

const DFS = (node) => {
    output.push(node)
    
    // vertex 연결된 이웃노드
    edges[node].forEach((vertex) => {
        // 방문하지 않았을 경우
        if(visited[vertex] === 0){
            // 방문 체크
            visited[vertex] = 1
            DFS(vertex)
        }
    })
}

const STRAT_VERTEX = 9

visited[STRAT_VERTEX] = 1;
DFS(STRAT_VERTEX)
console.log(output)