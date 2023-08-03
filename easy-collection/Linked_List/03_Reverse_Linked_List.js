/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  let curr = head;
  let prev = null;

  while (curr) {
    const currNext = curr.next;

    curr.next = prev;
    prev = curr;
    curr = currNext;
  }

  return prev;
}

/**
 * @param {ListNode} head
 * @param {ListNode} prev Default argument.
 * @return {ListNode}
 */
function _reverseList(head, prev = null) {
  if (!head) {
    return prev;
  }

  const headNext = head.next;

  head.next = prev;

  return _reverseList(headNext, head);
}

const { LinkedListBuilder } = require('./00_Linked_List_Builder');

const head = LinkedListBuilder.fromArray([1, 2, 3, 4]);

LinkedListBuilder.print(head);
LinkedListBuilder.print(reverseList(head));
