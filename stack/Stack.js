// ! What is stack ?
// Stack is data structure that can store many elements.
// Stack follow LIFO- Last In First Out.
// Last item added to the stack is the first one to the removed. Ex-> Stack of plates

//! Stack Key Operations:
// Push -> Add an element to the top of stack
// Pop -> Remove and return top element of the stack
// Peek -> Return the top element without removing it.
// isEmpty -> Check if the stack is empty.
// Size -> Return the number of elements in the stack.


// ! Real world example ->
// We use browser and we open multiple webpages on a single tab then if we go back so one by one pages will pop
// when we use any software where we are doing something and want to undo so we use stack to go back one by one on changes

class Stack {
    #items = []  // I use this to make it private that nobody can direct access or manupulate our array and this is called encapsulate
  constructor() {
    this.#items = [];
  }

  push(element) {
    this.#items.push(element);
  }

  pop() {
    if (this.#items.length === 0) {
      throw new Error("No item to pop");
    }
    return this.#items.pop();
  }

  peek() {
    if (this.#items.length === 0) {
      return null;
    }
    return this.#items[this.#items.length - 1];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  size() {
    return this.#items.length;
  }
}

export default Stack;
