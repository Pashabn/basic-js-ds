const {NotImplementedError} = require('../extensions/index.js');
const {ListNode} = require("../extensions/list-node");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {


    constructor() {
        this.head = null
        this.length = 0
    }

    getUnderlyingList() {
        return this.head
    }

    enqueue(value) {
        const nNode = new ListNode(value)
        if (!this.head) this.head = nNode
        else {
            let current = this.head
            while (current.next) current = current.next
            current.next = nNode
        }
        this.length++;
    }

    dequeue() {
        let dellN = this.head
        this.head = dellN.next
        this.length--;
        return dellN.value
    }
}

module.exports = {
    Queue
};
