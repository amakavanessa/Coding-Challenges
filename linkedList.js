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
}

// const myLinkedList = new linkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.prepend(0);
// myLinkedList.insert(2, 600);
// myLinkedList.insert(2, 80);
// myLinkedList.remove(2);
// myLinkedList.remove(2);
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
}

const myDoublyList = new DoublyList(12);
myDoublyList.append(1);
myDoublyList.append(8);
myDoublyList.prepend(0);
myDoublyList.insert(2, 77);
myDoublyList.remove(2);
console.log(myDoublyList);
console.log(myDoublyList.printList());
