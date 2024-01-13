class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    console.log(this.last);
    if (!this.length) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = this.last = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.length) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
  }

  isEmpty() {
    return !this.length;
  }
}

const myQueue = new Queue();

// myQueue.enqueue("plantain");
// myQueue.enqueue("yam");
// myQueue.enqueue("potatoes");
// myQueue.enqueue("irish potatoes");
// myQueue.enqueue("cocoyam");
// myQueue.dequeue();
// console.log(myQueue.isEmpty());
// console.log(myQueue.peek());

// console.log(myQueue);

//implement queues using stacks
// class Stack {
//   constructor() {
//     this.stack = [];
//   }

//   push(value) {
//     this.stack.push(value);
//   }
//   pop() {
//     if (!this.length) {
//       return "empty stack";
//     }

//     this.stack.pop();
//   }
//   peek() {
//     if (!this.stack.length) {
//       return null;
//     }
//     return this.stack[this.stack.length - 1];
//   }

//   empty() {
//     return !this.stack.length;
//   }
// }

class Queue2 {
  //   constructor() {
  //     this.stack = [];
  //     this.queue = [];
  //   }
  //   peek() {
  //     return this.stack[0];
  //   }
  //   push(value) {
  //     //I need to do this to keep track of pop calls
  //     const length = this.queue.length;
  //     for (let i = 0; i < length; i++) {
  //       this.stack.push(this.queue.pop());
  //     }

  //     this.stack.push(value);
  //   }
  //   pop() {
  //     const length = this.stack.length;
  //     for (let i = 0; i < length; i++) {
  //       this.queue.push(this.queue.pop());
  //     }
  //     this.queue.pop();

  //     return this;
  //   }

  constructor() {
    this.queue = [];
    this.stack = [];
  }

  push(value) {
    const length = this.queue.length;
    console.log(this.stack);
    for (let i = 0; i < length; i++) {
      this.stack.push(this.queue.pop());
    }
    console.log(this.stack);
    this.stack.push(value);

    return this;
  }

  pop() {
    const length = this.queue.length;
    console.log(this.queue);
    for (let i = 0; i < length; i++) {
      this.queue.push(this.stack.pop());
    }
    console.log(this.queue);
    this.queue.pop();

    return this;
  }

  peek() {
    if (this.queue.length > 0) {
      return this.queue[this.queue.length - 1];
    }

    return this.stack[0];
  }
  empty() {
    console.log(this.first.length, this.last.length);
    if (!this.first.length && !this.last.length) {
      return true;
    }
    return false;
  }
}
const queue = new Queue2();

queue.push("cocoyam");
queue.push("irish potatoes");
queue.push("sweet potatoes");
queue.pop();
console.log(queue.peek());

console.log(queue);

console.log(queue.empty());
