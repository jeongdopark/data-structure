// Queue

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}



class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value){
        const newNode = new Node(value);
        // Linked List 비어있을 경우
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
    }

    dequeue(){
        if(this.head === null){
            return 
        }
        const dequeueValue = this.head;
        this.head = this.head.next;
        
        if(this.head === null){
            this.tail = null;
        }

        this.length -= 1;
        return dequeueValue.value
    }

    size(){
        return this.length;
    }
}

module.exports = Queue