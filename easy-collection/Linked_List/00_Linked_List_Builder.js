/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list builder.
 */
class LinkedListBuilder {
  constructor() {}

  /**
   * @param {ListNode} root
   * @return {void}
   */
  static print(node) {
    let s = '';

    while (node) {
      s += node.val;

      if (node.next) {
        s += ' -> ';
      }

      node = node.next;
    }

    console.log(s);
  }

  /**
   * @param {number[]} array
   * @return {ListNode}
   */
  static fromArray(arr) {
    const beforeHead = new ListNode(0, null);

    let node = beforeHead;

    for (const val of arr) {
      node.next = new ListNode(val, null);
      node = node.next;
    }

    return beforeHead.next;
  }

  /**
   * @param {ListNode} root
   * @return {number[]}
   */
  static toArray(node) {
    const arr = [];

    while (node) {
      arr.push(node.val);
      node = node.next;
    }

    return arr;
  }
}

module.exports = {
  LinkedListBuilder,
};

/** Example usage
 * const arr = [1, 2, 3, 4];
 * const head = LinkedListBuilder.fromArray(arr);
 *
 * LinkedListBuilder.print(head);
 * console.log(LinkedListBuilder.toArray(head));
 */
