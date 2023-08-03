/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} min Default argument.
 * @param {number} max Default argument.
 * @return {boolean}
 */
function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) {
    return true;
  }

  if (root.val <= min || root.val >= max) {
    return false;
  }

  return isValidBST(root.right, root.val, max) && isValidBST(root.left, min, root.val);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function _isValidBST(root) {
  const stack = [[-Infinity, Infinity, root]];

  while (stack.length) {
    const [min, max, node] = stack.pop();

    if (!node) {
      continue;
    }

    if (node.val <= min || node.val >= max) {
      return false;
    }

    stack.push([min, node.val, node.left]);
    stack.push([node.val, max, node.right]);
  }

  return true;
}
