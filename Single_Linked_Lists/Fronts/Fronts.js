

class SLLNode {
    constructor(val) {
        this.value = val; //Holds value for this node
        this.next = null;              //pointer to the next node
    }
}
class SLL {
    constructor() {
        this.head = null;
    }

    // Adds a node to the front
    addFront(val) {
        // Creating a new node object with the value provided
        let new_node = new SLLNode(val);
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, place the new node as the head 
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
        new_node.next = this.head;
        // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
        this.head = new_node;
        return this;
    }
    // Remove a node from the front of the list
    removeFront() {

        if(this.head == null) {
            return this.head;
        }
        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
    }

    // we want to be able to display the value of the head of the linked list
    front() {

        if(this.head == null) { // if list is empty
            return null; // return null
        } else { // else
            return this.head.value; //return the current head value of linked list
        }
        
    }
}

var mySLL = new SLL();
mySLL.addFront(10);
mySLL.addFront(5);
mySLL.addFront(3);
mySLL.removeFront();
console.log(mySLL);