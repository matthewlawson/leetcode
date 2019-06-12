export default function mergeTwoLists(l1, l2) {
  if (l1 == null) {
    return l2;
  } else if (l2 == null) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
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
