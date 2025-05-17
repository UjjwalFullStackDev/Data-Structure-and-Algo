import Stack from './Stack.js'

const stack = new Stack();
stack.push(32)
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.size())