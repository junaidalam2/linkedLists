

class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class SingleLinkedLists {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        console.log(newNode)
        return this;
    }

    pop() {
        if(!this.head) return;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }

        let current = this.head;
        let newTail = null;

        while (current) {
            if(current.next) {
                newTail = current;
            }
            current = current.next;
        }

        const deletedNode = this.tail;
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return deletedNode;

    }


}

const list = new SingleLinkedLists();
list.push(1);
list.push(2);
console.log(list);
list.pop();
console.log(list);

// https://blog.bitsrc.io/data-structures-in-javascript-single-linked-lists-7df02408ebbc

