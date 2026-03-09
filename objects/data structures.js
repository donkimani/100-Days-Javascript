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

console.log(stack12.push(9));
console.log(stack12.push(8));
console.log(stack12.push(7));
console.log(stack12.push(6));

console.log(stack12.pop());
console.log(stack12.pop());
// console.log(stack12.pop());

