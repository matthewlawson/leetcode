export default function reverseLinkedList(head) {

    let previous= null;
    let current = head;
    let next = head.next;
    while(next != null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;

}
