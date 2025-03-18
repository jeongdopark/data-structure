class UnionFind {
    constructor(size) {
      this.parent = Array.from({ length: size }, (_, i) => i); // 부모 노드를 자기 자신으로 초기화
      this.rank = Array(size).fill(1); // 높이 배열 (초기값 1)
    }
  
    // Find 연산 (경로 압축 최적화)
    find(node) {
      if (this.parent[node] !== node) {
        this.parent[node] = this.find(this.parent[node]); // 경로 압축
      }
      return this.parent[node];
    }
  
    // Union 연산 (높이 기준 합치기)
    union(node1, node2) {
      let root1 = this.find(node1);
      let root2 = this.find(node2);
  
      if (root1 !== root2) {
        // 랭크(rank) 비교 후 더 작은 랭크를 큰 랭크에 연결
        if (this.rank[root1] > this.rank[root2]) {
          this.parent[root2] = root1;
        } else if (this.rank[root1] < this.rank[root2]) {
          this.parent[root1] = root2;
        } else {
          this.parent[root2] = root1;
          this.rank[root1]++;
        }
      }
    }
  
    // 두 노드가 같은 집합에 속해 있는지 확인
    isConnected(node1, node2) {
      return this.find(node1) === this.find(node2);
    }
  }
  

  const uf = new UnionFind(5);
  uf.union(0, 1);
  uf.union(1, 2);
  console.log(uf.isConnected(0, 2));
  console.log(uf.isConnected(0, 3));