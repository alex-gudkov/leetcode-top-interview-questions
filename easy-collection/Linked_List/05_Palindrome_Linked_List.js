/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  const arr = [];

  while (head) {
    arr.push(head.val);

    head = head.next;
  }

  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) {
      return false;
    }
  }

  return true;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function _isPalindrome(head) {
  // find middle
  let node = head;
  let nodeFast = head;

  while (nodeFast && nodeFast.next) {
    node = node.next;
    nodeFast = nodeFast.next.next;
  }

  // reverse after middle
  let nodePrev = null;

  while (node) {
    const nodeNext = node.next;

    node.next = nodePrev;
    nodePrev = node;
    node = nodeNext;
  }

  // check for palindrome
  let nodeLeft = head;
  let nodeRight = nodePrev;

  while (nodeRight) {
    if (nodeLeft.val !== nodeRight.val) {
      return false;
    }

    nodeLeft = nodeLeft.next;
    nodeRight = nodeRight.next;
  }

  return true;
}
