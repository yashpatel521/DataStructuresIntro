// Create a class called Stack. It should have a method to push, pop and peek

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

const myStack = new Stack();

myStack.push(5);
myStack.push(2);
myStack.push(1);

console.log("Stack :: ", myStack.items);
console.log("POP ::", myStack.pop());
console.log("Stack :: ", myStack.items);
console.log("Peek ::", myStack.peek());
