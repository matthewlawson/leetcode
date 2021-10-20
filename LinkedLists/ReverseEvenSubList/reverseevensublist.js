// Add any extra import statements you may need here


export class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

// Add any helper functions you may need here


export function reverse(head) {
    // Write your code here
    let dummy = new Node(0);
    dummy.next = head;
    let previous = dummy;
    let current = head;
    // let next = head;
    while (current != null) {

        if (current.data % 2 == 0) {
            // start reversing
            previous.next = reversedEvens(current);
        }
        previous = current;
        current = current.next;

    }

    return dummy.next;
}

function reversedEvens(head) {
    let prev = null;
    let current = head;
    let next = current;
    while(current != null && current.data % 2 == 0) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head.next = current;

    return prev;
}
