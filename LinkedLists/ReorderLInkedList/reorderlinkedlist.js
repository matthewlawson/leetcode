/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export default function(head) {
  // Find mid point of list
  if (head == null || head.next == null) {
    return head;
  }
  let slowPointer = head;
  let fastPointer = head;
  while (fastPointer.next != null && fastPointer.next.next != null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  let midPoint = slowPointer;
  // slowPointer.next = null;

  // These pointer should be stopped at the mid point, reverse the second half
  // Cut the first part - required ??

  let partTwo = reverse(midPoint.next);

  // Combine lists back together
  let a = head;
  let b = partTwo;

  let aNext = a;
  let bNext = b;
  while (bNext != null) {
    aNext = a.next;
    a.next = b;
    bNext = b.next;
    b.next = aNext;
    a = aNext;
    b = bNext;
  }
  a.next = null;

  a = null;
  // printList(head);
  return head;
}

const reverse = list => {
  let current = list;
  let previous = null;
  let next = null;
  while (current != null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};

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
