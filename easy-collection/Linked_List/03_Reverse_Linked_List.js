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
  let node = head;
  let nodePrev = null;

  while (node) {
    const nodeNext = node.next;

    node.next = nodePrev;
    nodePrev = node;
    node = nodeNext;
  }

  return nodePrev;
}

/**
 * @param {ListNode} head
 * @param {ListNode} nodePrev Default argument.
 * @return {ListNode}
 */
function _reverseList(head, nodePrev = null) {
  if (!head) {
    return nodePrev;
  }

  const headNext = head.next;

  head.next = nodePrev;

  return _reverseList(headNext, head);
}

const { LinkedListBuilder } = require('./00_Linked_List_Builder');

const head = LinkedListBuilder.fromArray([1, 2, 3, 4]);

LinkedListBuilder.print(head);
LinkedListBuilder.print(reverseList(head));
