class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }

  push(value) {
    const newStack = new Node(value);
    newStack.next = this.top;
    this.top = newStack;
    if (!this.length) {
      this.bottom = this.top;
    }
    this.length++;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
  }

  isEmpty() {
    return !this.length;
  }
}

const myStack = new Stack();

myStack.push("amazon");
myStack.push("meta");
myStack.push("google");
console.log(myStack.peek());
myStack.pop();
myStack.pop();
myStack.pop();
// console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack);
