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
// console.log(myStack.peek());
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack);

//implement stacks with Arrays
class StackArr {
  constructor() {
    this.stack = [];
  }

  peek() {
    if (this.stack.length) {
      return this.stack[this.stack.length - 1];
    }
    return "empty stack!";
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    this.stack.pop();
  }
}

const stack2 = new StackArr();

stack2.push("google");
stack2.push("udemy");
stack2.push("discord");
stack2.pop();

console.log(stack2.peek());
console.log(stack2);
