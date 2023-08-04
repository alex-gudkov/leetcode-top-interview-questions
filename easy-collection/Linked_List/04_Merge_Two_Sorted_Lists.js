/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  let beforeHead = new ListNode(0, null);
  let node = beforeHead;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      node.next = list1;
      list1 = list1.next;
    } else {
      node.next = list2;
      list2 = list2.next;
    }

    node = node.next;
  }

  while (list1) {
    node.next = list1;
    list1 = list1.next;
    node = node.next;
  }

  while (list2) {
    node.next = list2;
    list2 = list2.next;
    node = node.next;
  }

  return beforeHead.next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function _mergeTwoLists(list1, list2) {
  let beforeHead = new ListNode(0, null);
  let node = beforeHead;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      node.next = list1;
      list1 = list1.next;
    } else {
      node.next = list2;
      list2 = list2.next;
    }

    node = node.next;
  }

  node.next = list1 || list2;

  return beforeHead.next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function __mergeTwoLists(list1, list2) {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  if (list1.val < list2.val) {
    list1.next = __mergeTwoLists(list1.next, list2);

    return list1;
  } else {
    list2.next = __mergeTwoLists(list1, list2.next);

    return list2;
  }
}
