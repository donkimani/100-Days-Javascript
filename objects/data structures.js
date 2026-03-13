// Data structures (stacks, ques and linked lists)

// stacks
class Stack{
    constructor(){
        this.items = [];
        this.count = 0;
    }

    push(value){
        this.items[this.count] = value;
        console.log(`${value} has been added to: ${this.count}`)
        this.count += 1;
        return this.count - 1; 
    }

    pop(){
        if (this.count === 0) return undefined;
        let deletedItem = this.items[this.count - 1]
        this.count -= 1;
        console.log(`${deletedItem} has been removed`);
        return deletedItem;
    }
}

const stack = new Stack();

// console.log(stack.push(100));
// stack.push(200);
// stack.push(300);

// stack.pop();
// stack.pop();
// stack.pop();
// console.log(stack.pop());

// stack2
// class for each node in the stack 
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// class for stack
class Stack2{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        let newNode = new Node(value);
        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        }else {
            let store = this.first;
            this.first = newNode;
            this.first.next = store;
        }
        return ++ this.size;
    }

    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size --
        return temp.value;
    }
}

const stack12 = new Stack2();

// console.log(stack12.push(9));
// console.log(stack12.push(8));
// console.log(stack12.push(7));
// console.log(stack12.push(6));

// console.log(stack12.pop());
// console.log(stack12.pop());
// console.log(stack12.pop());

// queues

// create a class for each node in the queue
class Node123 {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// creating a class for the queue
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        let newNode = new Node123(val);
        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        ++this.size
        return `${this.last.value} has been added,now que is size: ${this.size}`;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next
        this.size--;
        return `${temp.value} has been removed`;
    }
}

const queue1 = new Queue();
// console.log(queue1.enqueue("lamba lolo1"));
// console.log(queue1.enqueue("lamba lolo2"));
// console.log(queue1.enqueue("lamba lolo3"));

// console.log(queue1.dequeue());
// console.log(queue1.dequeue());
// console.log(queue1.dequeue());

// linked lists
class Node3{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinked{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node3(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this
    }

    pop(){
        if(!this.head) return undefined;
        const current = this.head;
        const newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
    }
}

