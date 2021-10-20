/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let l = dummy;
    let r = dummy;
    let diff = 0;
    while(r.next != null) {
        if(diff < n) {
            r = r.next;
            diff ++;
        }
        else {
            r = r.next;
            l = l.next;
        }
    }
    // console.log(l.val);
    l.next = l.next.next;

    return dummy.next

};
