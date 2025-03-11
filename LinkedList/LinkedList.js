

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            return 
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    removeTargetValue(value){
        const targetValue = value;
        // Linked List 비어 있을 경우
        if(this.head === null) return 'Linked list 비어 있습니다.'

        // this.head가 targetValue일 경우
        if(this.head.value === targetValue){
            if(this.head === this.tail) {
                this.head = null
                this.tail = null
                return
            }
            this.head = this.head.next
            
            return
        }

        let currentNode = this.head;
        while(currentNode.next !== null && currentNode.next.value !== targetValue){
            currentNode = currentNode.next
        }
        if(currentNode.next !== null){
            currentNode.next = currentNode.next.next
            if(currentNode.next.next === null){
                this.tail = current
            }
        }
    }
}