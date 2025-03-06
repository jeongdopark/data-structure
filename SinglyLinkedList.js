// data를 인자로 초기화하고 다음 포인터는 null을 가리킨다.
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// 잘못된 사고방식의 흐름
// this.list = [] Linked List에 어떤 요소가 있는지 확인하려면 배열에 넣어야할까? 
// '순차탐색'임을 잊지 말아라. this.head부터 '순차탐색'
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    // 노드 삽입
    add(data){
        const newNode = new Node(data);

        // Linked List가 비어 있을 경우
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
            return
        }

        // Linked List에 요소가 있을 경우 this.tail에 newNode 할당 및 this.tail 변경
        this.tail.next = newNode
        this.tail = newNode
        return
    }

    // data에 해당하는 요소 삭제
    removeTargetNode(data){
        const target = data;
        // Linked List가 비어 있을 경우
        if(this.head === null){
            return 'Linked List가 비어있습니다.'
        }

        if(this.head.data === target){
            this.head = this.head.next;
            // tail check
            if(this.head === null) this.tail = null;
            return
        }
        
        const currentNode = this.head
        // while '순차 탐색'
        while(currentNode.next !== null && currentNode.next.data !== data){
            currentNode = currentNode.next;
        }
        if(currentNode.next !== null){
            // tail check
            if(currentNode.next === this.tail){
                this.tail = currentNode
            }
            currentNode.next = currentNode.next.next;
        }
    }
}