class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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

  //   [0, 1, 10, 5, 16];
  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
      return this.printList();
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

const myLinkedList = new linkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.prepend(0);
myLinkedList.insert(2, 600);
myLinkedList.insert(2, 80);
console.log(myLinkedList.printList());
console.log(myLinkedList);
