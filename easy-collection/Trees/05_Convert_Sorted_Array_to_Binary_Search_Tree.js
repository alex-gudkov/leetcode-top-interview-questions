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

    const mid = Math.floor((i + j) / 2);
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

  const mid = Math.floor(arr.length / 2);
  const root = new TreeNode(
    arr[mid],
    sortedArrayToBST(arr.slice(0, mid)),
    sortedArrayToBST(arr.slice(mid + 1)),
  );

  return root;
}
