export default function mergeTwoLists(l1, l2) {
    let head = new ListNode(-1);
    let pointer = head;

    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            pointer.next = l1;
            l1 = l1.next;
        }
        else {
            pointer.next = l2;
            l2 = l2.next
        }
        pointer = pointer.next;
    }

    pointer.next = l1 == null ? l2 : l1;
    return head.next;
}

export class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const printList = head => {
    let current = head;
    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
};
