

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

    insert(index, value) {
        
        if(index < 1 || index > this.length) return null;
        if(index === 1) {
            this.unshift(value);
            return this;
        }
            if(index === this.length) {
            this.push(value);
            return this;
        }
            
        const newNode = new Node(value);
        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.next = afterNode;
        this.length++;
        return this;
    }

    remove(index) {

        if(index < 1 || index > this.length) return null;
        if(index === 1) {
            this.shift;
            return;
        }
        if(index === this.length) {
            this.pop();
            return;
        }

        const beforeNode = this.get(index - 1);
        const deletedNode = beforeNode.next;
        beforeNode.next = beforeNode.next.next;
        this.length--;
        return deletedNode;
    }

    reverse() {

        if(this.length < 2) return;
        
        let movingNode = this.head;
        this.head = this.tail;
        this.tail = movingNode;

        let nextNode;
        let previousNode = null;

        //general logic - build up previousNode in reverse order and then append to new head
        for (let i = 0; i < this.length; i++) {
            nextNode = movingNode.next;
            movingNode.next = previousNode;
            previousNode = movingNode;
            movingNode = nextNode;
        }
    }


}

const list = new SingleLinkedLists();
list.push(1);
list.push(2);
list.push(3);
//list.push(4);
//list.push(5);

//console.log(list);
//list.unshift(4);
//console.log(list);
//console.log(list.get(2));
//console.log(list.set(1, 11));
//console.log(list.insert(2, 30));
//console.log(list.remove(2));
list.reverse();
console.log(list);

//list.pop();
//list.shift();
//console.log('post-shift')
//console.log(list);

// https://blog.bitsrc.io/data-structures-in-javascript-single-linked-lists-7df02408ebbc

