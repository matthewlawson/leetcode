import { reverse, Node } from "./reverseevensublist";


test("example one", () => {
    var head_1 = createLinkedList([1, 2, 8, 9, 12, 16]);
    var expected_1 = createLinkedList([1, 8, 2, 9, 16, 12]);
    var output_1 = reverse(head_1);
    expect(check(expected_1, output_1)).toBe(true);


})

test("example two", () => {
    var head_2 = createLinkedList([2, 18, 24, 3, 5, 7, 9, 6, 12]);
    var expected_2 = createLinkedList([24, 18, 2, 3, 5, 7, 9, 12, 6]);
    var output_2 = reverse(head_2);
    expect(check(expected_2, output_2)).toBe(true);

})



function createLinkedList(arr) {
    var head = null;
    var tempHead = head;
    for (var v of arr) {
        if (head == null) {
            head = new Node(v);
            tempHead = head;
        } else {
            head.next = new Node(v);
            head = head.next;
        }
    }
    return tempHead;
}
function check(expectedHead, outputHead) {
    var result = true;
    var tempExpectedHead = expectedHead;
    var tempOutputHead = outputHead;
    while (expectedHead != null && outputHead != null) {
        result &= (expectedHead.data == outputHead.data);
        expectedHead = expectedHead.next;
        outputHead = outputHead.next;
    }
    if (!(expectedHead == null && outputHead == null)) result = false;

    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
        var out = rightTick
        // console.log(out);
        return true;
    } else {
        var out = '';
        out += wrongTick + 'Expected ';
        out += printLinkedList(tempExpectedHead);
        out += ' Your output: ';
        out += printLinkedList(tempOutputHead);
        console.log(out);
        return false;
    }
}

function printLinkedList(head) {
    var out = '[';
    while (head != null) {
      out += head.data;
      head = head.next;
      if (head != null) {
        out += ' ';
      }
    }
    out += ']';
    return out;
  }
