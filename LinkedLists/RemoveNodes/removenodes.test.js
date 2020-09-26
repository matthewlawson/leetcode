import removeNodes, { ListNode } from "./removenodes";
describe("Remove Nodes from LinkedList", () => {
  test("Example One", () => {
    const originalValues = [1, 2, 6, 3, 4, 5, 6];
    const expectedValues = [1, 2, 3, 4 , 5];
    let originalList = createLinkedList(originalValues);

    const head = removeNodes(originalList, 6);
    let current = head;
    for (let i = 0; i < expectedValues.length; i++) {
      expect(current.val).toBe(expectedValues[i]);
      current = current.next;
    }
  });

  test("Example Two", () => {
    const originalValues = [6, 6, 6, 6, 3, 5, 6];
    const expectedValues = [3, 5];
    let originalList = createLinkedList(originalValues);

    const head = removeNodes(originalList, 6);
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
