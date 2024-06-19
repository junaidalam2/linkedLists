

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
        //console.log(newNode)
        //console.log(this);
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

    shift() {
        
        if(!this.head) return;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
            this.legnth = 0;
            return;
        }
        
        const currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        return currentHead;
    }

    unshift(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 1 || index > this.legnth) return null;

        let counter = 1;
        let current = this.head;
        while(index <= index) {
            if(counter == index) return current;
            current = current.next;
            counter++;
        }
    }

    set(index, value) {
        if(index < 1 || index > this.legnth) return null;

        let node = this.get(index)
        node.value = value;
        return node;
    }

}

const list = new SingleLinkedLists();
list.push(1);
list.push(2);
list.push(3);
//console.log(list);
//list.unshift(4);
console.log(list);
//console.log(list.get(2));
console.log(list.set(1, 11));

//list.pop();
//list.shift();
//console.log('post-shift')
//console.log(list);

// https://blog.bitsrc.io/data-structures-in-javascript-single-linked-lists-7df02408ebbc

