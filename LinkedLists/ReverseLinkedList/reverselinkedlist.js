/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export default function(head) {
  let current = head;
  let next = null;
  let prev = null;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
}

export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
