export default function removeNodes(head, value) {
    let fakeHead = new ListNode(0, head);

    let current = fakeHead.next;
    let previous = fakeHead;

    while (current) {
        if(current.val == value) {
            previous.next = current.next
        }
        else {
            previous = current;
        }
        current = current.next;
    }

    return fakeHead.next;

}

export class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
