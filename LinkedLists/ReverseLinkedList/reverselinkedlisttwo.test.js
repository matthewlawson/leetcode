import { ListNode } from "./reverselinkedlist";
import reverseLinkedList from "./reverselinkedlisttwo";

describe("LinkedList Reversal", () => {
  let originalList;
  beforeEach(() => {
    originalList = new ListNode(1);
    let current = originalList;
    for (let i = 2; i <= 5; i++) {
      let newNode = new ListNode(i);
      current.next = newNode;
      current = current.next;
    }
  });

  test("list is reversed", () => {
    const head = reverseLinkedList(originalList);
    let current = head;
    for (let i = 5; i >= 1; i--) {
      expect(current.val).toBe(i);
      current = current.next;
    }
  });
});
