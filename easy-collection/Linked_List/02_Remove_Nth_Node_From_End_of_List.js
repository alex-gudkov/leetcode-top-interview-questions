/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  const beforeHead = new ListNode(0, head);
  let node = beforeHead;
  let nodeShifted = head;

  for (let i = 0; i < n; i++) {
    nodeShifted = nodeShifted.next;
  }

  while (nodeShifted) {
    nodeShifted = nodeShifted.next;
    node = node.next;
  }

  node.next = node.next.next;

  return beforeHead.next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function _removeNthFromEnd(head, n) {
  let node = head;
  let nodeShifted = head;

  for (let i = 0; i < n; i++) {
    nodeShifted = nodeShifted.next;
  }

  if (!nodeShifted) {
    head = head.next;

    return head;
  }

  while (nodeShifted.next) {
    nodeShifted = nodeShifted.next;
    node = node.next;
  }

  node.next = node.next.next;

  return head;
}
