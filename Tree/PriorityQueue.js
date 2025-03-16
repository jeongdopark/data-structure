

class PriorityQueue {
    constructor(){
        this.heap = [];
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }

    getLeftChildIndex(index){
        return 2 * index +1 
    }

    getRightChildIndex(index){
        return 2 * index +2
    }

    // dequeue에서 사용
    heapifyDown(){
        let currentIndex = 0;
        while( this.getLeftChildIndex(currentIndex) < this.heap.length ){
            let smallerChildIndex = this.getLeftChildIndex(currentIndex);
            let rightChildIndex = this.getRightChildIndex(currentIndex);

            if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallerChildIndex]){
                smallerChildIndex = rightChildIndex
            }

            if(this.heap[smallerChildIndex] >= this.heap[currentIndex]) break

            [this.heap[smallerChildIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[smallerChildIndex]]
            currentIndex = smallerChildIndex
        }
    }

    // enqueue에서 사용
    heapifyUp(){
        let currentIndex = this.heap.length -1
        
        while(currentIndex > 0){
            let parentIndex = this.getParentIndex(currentIndex)
            // 부모 값보다 현재 값이 더 클경우 break
            if(this.heap[parentIndex] <= this.heap[currentIndex]) break
            
            [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]]
            currentIndex = parentIndex
        }
    }

    enqueue(value){
        this.heap.push(value);
        this.heapifyUp()
    }

    dequeue(){
        if(this.heap.length === 0) return 
        if(this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown()
        return root
    }
}