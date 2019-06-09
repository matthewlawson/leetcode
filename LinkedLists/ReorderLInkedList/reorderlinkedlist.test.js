import reorderLinkedList, { ListNode } from "./reorderlinkedlist";
describe("LinkedList Reordering", () => {
  test("list is reordered", () => {
    const originalValues = [1, 2, 3, 4, 5, 6, 7];
    const expectedValues = [1, 7, 2, 6, 3, 5, 4];
    let originalList = createLinkedList(originalValues);

    const head = reorderLinkedList(originalList);
    let current = head;
    for (let i = 0; i < expectedValues.length; i++) {
      expect(current.val).toBe(expectedValues[i]);
      current = current.next;
    }
  });
});
const createLinkedList = values => {
  let originalList = new ListNode(values[0]);
  let current = originalList;
  for (let i = 1; i < values.length; i++) {
    let newNode = new ListNode(values[i]);
    current.next = newNode;
    current = current.next;
  }
  return originalList;
};
