/**
 * LinkedQueue
 * 
 * Operation    | Runtime
 * -------------|---------
 * enqueue(x) | O(1)
 * dequeue()  | O(1)
 * length     | O(1) 
 * remove(node)     | O(1)
 */

 // Knows how to remove itself from a linked list
class QueueNode {
  data: any;
  next: QueueNode;
  prev: QueueNode;

  constructor(data){
    this.data = data;
    this.next = null;
    this.prev = null;
  }

  remove(){
    if(this.prev){
      this.prev.next = this.next;
    }
    this.next.prev = this.prev;
    this.data = null;
  }

}

export class LinkedQueue {
  head: QueueNode;
  tail: QueueNode;
  length: number;

  constructor(){
    this.head = this.tail = null;
    this.length = 0;
  }

  enqueue(data){
    const n = new QueueNode(data);
    if(!this.head){
      this.head = this.tail = n;
    } else {
      this.tail.next = n;
      n.prev = this.tail;
      this.tail = n;
    }
    this.length++;
    return n; // Must be used to remove in O(1)
  }
  dequeue():any{
    if(!this.head) return null;
    const data = this.head.data;
    if(this.head == this.tail){
      this.head = this.tail = null;
      this.length = 0;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
    }
    return data;
  }
  remove(node){
    node.remove();
    this.length--;
  }
  enqueueAtPosition(pos, data){
    if(pos > this.length) return null;
    const n = new QueueNode(data);
    let here = this.head;
    for(let i=0; i < pos; i++){
      here = here.next;
    }
    if(!here){
      return this.enqueue(data);
    } else {
      if(here.prev){
        here.prev.next = n;
        n.prev = here.prev;
      }
      here.prev = n;
      n.next = here;
    }
    return n;
  }
}
