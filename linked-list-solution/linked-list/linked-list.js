class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    insert(data) {
        let newNode = new LinkedListNode(data)
        if(!this.head){
            this.head = newNode;
        } else {
            let lastNode = this.head;
            while(lastNode.next) {
                lastNode = lastNode.next;
            }
            newNode.next = lastNode.next;
            lastNode.next = newNode;
        }
    }

    find(data) {
        let node = this.head;
        while(node){
            if(node.data == data){
                return true;
            }
            node = node.next;
        }
        return false;
    }

    size() {
        let count = 0;
        let node = this.head;
        while(node){
            count++;
            node = node.next;
        }
        return count;
    }

    remove(data) {
        let node = this.head;
        if(node.data == data){
            this.head = node.next;
            return true;
        } else {
            while(node.next){
                if(node.next.data == data){
                    node.next = node.next.next;
                    return true;
                }
                node = node.next;
            }
            return false;
        }
    }
}


let node1 = new LinkedListNode(2);
let node2 = new LinkedListNode(5);
node1.next = node2;

let list = new LinkedList(node1);