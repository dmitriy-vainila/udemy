class PriorityQueue {
   constructor() {
      this.values = [];
   }
   enqueue(val, priority) {
      let newNode = new Node(val, priority);

      this.values.push(newNode);
      this.bubbleUp();
   }
   bubbleUp() {
      let index = this.values.length - 1;
      const element = this.values[index];
      while (index > 0) {
         console.log("bubble");
         let parentIndex = Math.floor((index - 1) / 2);
         let parent = this.values[parentIndex];
         if (element.priority >= parent.priority) break;
         this.values[parentIndex] = element;
         this.values[index] = parent;
         index = parentIndex;
      }
   }
   dequeue() {
      const min = this.values[0];
      const end = this.values.pop();
      if (this.values.length > 0) {
         this.values[0] = end;
         this.sinkDown();
      }
      return min;
   }
   sinkDown() {
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
         let leftChildIdx = 2 * idx + 1;
         let rightChildIdx = 2 * idx + 2;
         
         let leftChild, rightChild;
         let swap = null;

         if (leftChildIdx < length) {
            leftChild = this.values[leftChildIdx];
            if (leftChild.priority < element.priority) {
               swap = leftChildIdx;
            }
         }
         if (rightChildIdx < length) {
            rightChild = this.values[rightChildIdx];
            if (
               (swap === null && rightChild.priority < element.priority) ||
               (swap !== null && rightChild.priority < leftChild.priority)
            ) {
               swap = rightChildIdx;
            }
         }

         if (swap == null) break;
         this.values[idx] = this.values[swap];
         this.values[swap] = this.values[element];
         idx = swap;
      }
   }
}

class Node {
   constructor(val, priority) {
      this.val = val;
      this.priority = priority;
   }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 2);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fewer", 5);

console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());

// [41, 39, 33, 18, 27, 12, 55];
//   0   1   2   3   4   5   6
