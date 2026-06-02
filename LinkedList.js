// create a class called LinkedList. It should have a head and tail property. It should have an instance method called append that will append to the linked list a node instance. Also a property called  insertAt that will insert a node at a given index

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return this;
  }

  insertAt(index, value) {
    if (index < 0 || index > this.size()) {
      throw new Error("Index out of bounds");
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else if (index === this.size()) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }

      newNode.next = current.next;
      current.next = newNode;
    }

    return this;
  }

  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // console log in array format
  print() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result.join(" -> ");
  }
}

const list = new LinkedList();
list.append(1);

list.insertAt(1, 2);
list.insertAt(2, 3);
list.insertAt(2, 4);

console.log(list.print()); // 2
