import Queue from "./Queue.js";

const queueInstance = new Queue();

queueInstance.enqueue(3)
queueInstance.enqueue(4)
queueInstance.enqueue(5)
queueInstance.enqueue(7)
// console.log(queueInstance.dequeue())
// console.log(queueInstance.dequeue())
// console.log(queueInstance.dequeue())
// console.log(queueInstance.dequeue())
// console.log(queueInstance.dequeue())

console.log("check 1st element " + queueInstance.peek())
console.log("remove 1st element " +queueInstance.dequeue())
console.log("again check 1st element "+ queueInstance.peek())
console.log("queue is empty? "+ queueInstance.isEmpty())
console.log("queue length "+ queueInstance.size())