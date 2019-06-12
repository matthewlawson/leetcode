import mergeLists, { ListNode } from "./mergelists";
describe("Merge lists Reordering", () => {
  test("example 1", () => {
    const listOne = [1, 2, 4];
    const listTwo = [1, 3, 4];
    const expectedValues = [1, 1, 2, 3, 4, 4];
    let originalListOne = createLinkedList(listOne);
    let originalListTwo = createLinkedList(listTwo);

    const head = mergeLists(originalListOne, originalListTwo);
    let current = head;
    for (let i = 0; i < expectedValues.length; i++) {
      expect(current.val).toBe(expectedValues[i]);
      current = current.next;
    }
  });

  test.skip("example 2", () => {
    const listOne = [];
    const listTwo = [0];
    const expectedValues = [0];
    let originalListOne = createLinkedList(listOne);
    let originalListTwo = createLinkedList(listTwo);

    const head = mergeLists(originalListOne, originalListTwo);
    let current = head;
    for (let i = 0; i < expectedValues.length; i++) {
      expect(current.val).toBe(expectedValues[i]);
      current = current.next;
    }
  });

  test("Must be sorted ... 2", () => {
    const listOne = [2];
    const listTwo = [1];
    const expectedValues = [1, 2];
    let originalListOne = createLinkedList(listOne);
    let originalListTwo = createLinkedList(listTwo);

    const head = mergeLists(originalListOne, originalListTwo);
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
