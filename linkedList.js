// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class linkedList {
  constructor(value) {
    this.head = new Node(value);

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    this.tail["next"] = this.tail = new Node(value);
    this.length += 1;
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    } else if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;

    leader.next = newNode;
    newNode.next = holdingPointer;

    this.length++;
  }

  traverseToIndex(index) {
    let pointer = 0;
    let currentNode = this.head;

    while (pointer !== index) {
      currentNode = currentNode.next;
      pointer++;
    }
    return currentNode;
  }

  //   [0, 1, 10, 5, 16];
  remove(index) {
    if (index > this.length) {
      console.log("invalid index");
      return "invalid index";
    }
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;

    this.length--;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    this.length += 1;
    return this;
  }
  printList() {
    const array = [];

    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  //[1,2,3,4,5]

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let currentNode = this.head;
    let nextNode = currentNode.next;
    this.tail = currentNode;

    while (nextNode) {
      const temp = nextNode.next;
      nextNode.next = currentNode;
      currentNode = nextNode;
      nextNode = temp;
    }

    this.head.next = null;
    this.head = currentNode;

    return this;
  }
}

// const myLinkedList = new linkedList(5);
// myLinkedList.append(10);
// myLinkedList.append(15);
// myLinkedList.append(20);
// console.log(myLinkedList.reverse());
// // myLinkedList.prepend(1);
// // myLinkedList.prepend(0);
// // myLinkedList.insert(2, 600);
// // myLinkedList.insert(2, 80);
// // myLinkedList.remove(2);
// // myLinkedList.remove(2);
// console.log(myLinkedList.printList());
// console.log(myLinkedList);

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    const tail = this.tail;
    this.tail.next = this.tail = newNode;
    this.tail.prev = tail;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    const head = this.head;
    this.head.prev = this.head = newNode;
    this.head.next = head;

    this.length++;
  }

  printList() {
    const array = [];

    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  traverseToIndex(index) {
    let pointer = 0;
    let currentNode = this.head;
    while (index !== pointer) {
      currentNode = currentNode.next;
      pointer++;
    }

    return currentNode;
  }
  //[1,2,3,4,5]
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    } else if (index === 0) {
      return this.prepend(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const trail = leader.next;
    //leader.next should be newNode//trail.prev should be newNo
    leader.next = trail.prev = newNode;

    //newNode next should be trail
    newNode.next = trail;
    //newNodePrev should be leader
    newNode.prev = leader;
    this.length++;
  }

  remove(index) {
    if (index > this.length || index < 0) {
      console.log("invalid input");
      return "invalid input";
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    const trail = unwantedNode.next;

    leader.next = trail;
    trail.prev = leader;

    this.length--;
  }
  //[5,10,15,20] [20,15,10,5]

  //next-2 prev - null //next-null prev-4
  //   reverse() {

  //     let currentNode = this.head;
  //     let nextNode = currentNode.next;
  //     let prevNode = currentNode.prev;
  //     this.tail = this.head;

  //     // this.tail.next = null;
  //     console.log("[5,10,15,20] [20,15,10,5]");
  //     while (currentNode) {
  //       console.log("current ", currentNode);
  //       console.log("prev ", currentNode.prev);
  //       console.log("next ", currentNode.next);
  //       currentNode.prev = nextNode;
  //       console.log("prev2 ", currentNode.prev);
  //       currentNode.next = prevNode;
  //       console.log("next2 ", currentNode.next);
  //       currentNode = nextNode;
  //       nextNode = currentNode.next;
  //     }

  //     this.head = currentNode;

  //     this.head.prev = null;
  //     return this;
  //   }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let currentNode = this.head;
    let nextNode = currentNode.next;
    currentNode.prev = nextNode;
    this.tail = currentNode;

    while (nextNode) {
      const temp = nextNode.next;
      nextNode.next = currentNode;
      nextNode.prev = temp;
      currentNode = nextNode;
      nextNode = temp;
    }

    this.tail.next = null;
    this.head = currentNode;

    return this;
  }
}

const myDoublyList = new DoublyList(5);
myDoublyList.append(10);
myDoublyList.append(15);
myDoublyList.append(20);

console.log(myDoublyList.reverse());
console.log(myDoublyList);
console.log(myDoublyList.printList());
