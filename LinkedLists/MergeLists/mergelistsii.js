/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

export default function (l1, l2) {
    let a;
    let b;
    if (l1 == null) {
        return l2;
    }
    else if (l2 == null) {
        return l1;
    }

    if (l1.val < l2.val) {
        a = l1;
        b = l2
    }
    else {
        a = l2;
        b = l1;
    }
    let head = a;
    while (a != null || b != null) {
        if ((a.next != null && (b != null && b.val < a.next.val)) || a.next == null) {
            let temp = a.next;
            a.next = b;
            b = temp;
            a = a.next
        }
        else {
            a = a.next;
        }
    }
    return head;
}
