class Queue {
    constructor() {
        this.items = [];
        this.front = 0; // Points to the front of the queue
        this.rear = 0;  // Points to the next empty slot
    }

    // Add an element to the end of the queue
    enqueue(element) {
        this.items[this.rear] = element; // Insert at the rear
        this.rear++; // Move the rear index
    }

    // Remove an element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return null; // or throw an error
        }
        const item = this.items[this.front]; // Get the front item
        this.front++; // Move the front index
        return item; // Return the removed item
    }

    // Check if the queue is empty
    isEmpty() {
        return this.front === this.rear; // No items between front and rear
    }

    // Get the size of the queue
    size() {
        return this.rear - this.front; // Calculate size
    }

    // Peek at the front element
    peek() {
        if (this.isEmpty()) {
            return null; // or throw an error
        }
        return this.items[this.front]; // Return the front item
    }

    // Print the queue
    print() {
        const queueElements = [];
        for (let i = this.front; i < this.rear; i++) {
            queueElements.push(this.items[i]);
        }
        console.log(queueElements.toString());
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Outputs: 1
console.log(queue.peek()); // Outputs: 2
queue.print(); // Outputs: 2,3
