/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  const listSet = new Set();

  while (head) {
    if (listSet.has(head)) {
      return true;
    }

    listSet.add(head);

    head = head.next;
  }

  return false;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function _hasCycle(head) {
  let node = head;
  let fastNode = head;

  while (fastNode && fastNode.next) {
    fastNode = fastNode.next.next;
    node = node.next;

    if (fastNode === node) {
      return true;
    }
  }

  return false;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function __hasCycle(head) {
  let node = head;
  let fastNode = head;

  while (fastNode && fastNode.next) {
    fastNode = fastNode.next;

    if (fastNode === node) {
      return true;
    }

    fastNode = fastNode.next;

    if (fastNode === node) {
      return true;
    }

    node = node.next;
  }

  return false;
}
