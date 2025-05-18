// ! What is Queue ?
// Queue is a data structure that can store many elements.
// Queue follows FIFO - First In First Out.
// The first item added to the queue is the first one to be removed. Ex -> Queue in a ticket counter

//! Queue Key Operations:
// Enqueue -> Add an element to the end of the queue
// Dequeue -> Remove and return the element from the front of the queue
// Peek -> Return the first element without removing it
// isEmpty -> Check if the queue is empty
// Size -> Return the number of elements in the queue

// ! Real world example ->
// People standing in a line to buy movie tickets - the one who comes first gets the ticket first.
// Printer task scheduling - documents are printed in the order they are added to the queue.

// ! push-> add last element
// ! pop -> remove last element
// ! shift -> remove the first element
// ! unshift -> add one to the start of an array
// ! map -> apply all function to all element


class Queue {
    #items = []

    enqueue(item) {
        this.#items.push(item)
    }

    dequeue() {
        if(this.#items.length == 0) throw new Error('Queue is empty')
        return this.#items.shift()
    }

    peek() {
        if(this.#items.length == 0) throw new Error('No item to peek')
        return this.#items[0]
    }

    isEmpty() {
        return this.#items.length === 0;
    }

    size() {
        return this.#items.length
    }
}

export default Queue;