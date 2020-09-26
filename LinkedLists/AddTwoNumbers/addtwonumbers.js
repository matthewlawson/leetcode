/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // Another Approach
    // Tracverse both lists. make a new list
    // Add both current nodes toget, being careful of any carry values.


    let newListHead = new ListNode(0);
    let newListCurrent = newListHead;
    let carry = 0;
    while (l1 || l2) {
        let value = (l1 ? l1.val : 0 + l2 ? l2.val : 0 + carry) % 10;
        newListCurrent.next = new ListNode(value);
        carry = l1 + l2.val >= 10 ? 1 : 0;
        // Careful of carries
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }

        newListCurrent = newListCurrent.next
    }
    if (carry > 0) {
        newListCurrent.next = new ListNode(carry);
    }

    return newListHead.next;
};










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
var addTwoNumbers = function (l1, l2) {
    // let endNodeL1 = findAtIndex(l1);
    // let endNodeL2 = findAtIndex(l2);

    let l1Current = l1;
    let l2Current = l2;

    let returnList = null;

    let remainder = 0;
    let currentElement = null;

    while ((l1Current != null || l2Current != null) || remainder != 0) {
        const l1Val = l1Current && l1Current.val ? l1Current.val : 0;
        const l2Val = l2Current && l2Current.val ? l2Current.val : 0
        let value = (l1Val + l2Val) + remainder;
        if (value >= 10) {
            remainder = Math.floor(value / 10);
            value = value - 10;
        }
        else {
            remainder = 0;
        }
        console.log(value, remainder)
        if (returnList == null) {
            returnList = new ListNode(value);
            currentElement = returnList;
        }
        else {
            currentElement.next = new ListNode(value);
            currentElement = currentElement.next;
        }

        l1Current = l1Current && l1Current.next ? l1Current.next : null;
        l2Current = l2Current && l2Current.next ? l2Current.next : null;

        // l1Current = l1Current.next
        // l2Current = l2Current.next

    }
    return returnList;


};
