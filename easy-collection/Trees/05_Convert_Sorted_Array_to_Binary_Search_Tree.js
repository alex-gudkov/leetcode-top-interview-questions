/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} arr
 * @return {TreeNode}
 */
function sortedArrayToBST(arr) {
  function fn(i, j) {
    if (i > j) {
      return null;
    }

    const mid = Math.trunc((i + j) / 2);
    const node = new TreeNode(arr[mid], fn(i, mid - 1), fn(mid + 1, j));

    return node;
  }

  return fn(0, arr.length - 1);
}

/**
 * @param {number[]} arr
 * @return {TreeNode}
 */
function sortedArrayToBST(arr) {
  if (!arr.length) {
    return null;
  }

  const mid = Math.trunc(arr.length / 2);
  const root = new TreeNode(
    arr[mid],
    sortedArrayToBST(arr.slice(0, mid)),
    sortedArrayToBST(arr.slice(mid + 1)),
  );

  return root;
}

/**
 * @param {number[]} arr
 * @return {TreeNode}
 */
function sortedArrayToBST(arr) {
  if (!arr.length) {
    return null;
  }

  const root = new TreeNode();
  const stack = [{ node: root, i: 0, j: arr.length - 1 }];

  while (stack.length) {
    const { node, i, j } = stack.pop();
    const mid = Math.trunc((i + j) / 2);

    node.val = arr[mid];

    if (i < mid) {
      node.left = new TreeNode();
      stack.push({ node: node.left, i, j: mid - 1 });
    }

    if (j > mid) {
      node.right = new TreeNode();
      stack.push({ node: node.right, i: mid + 1, j });
    }
  }

  return root;
}
