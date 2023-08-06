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
 * @return {boolean}
 */
function isSymmetric(root) {
  if (!root) {
    return true;
  }

  function dfs(left, right) {
    if (!left && !right) {
      return true;
    }

    if (!left || !right) {
      return false;
    }

    return left.val === right.val && dfs(left.left, right.right) && dfs(left.right, right.left);
  }

  return dfs(root.left, root.right);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function _isSymmetric(root) {
  if (!root) {
    return true;
  }

  const stack = [[root.left, root.right]];

  while (stack.length) {
    const [left, right] = stack.pop();

    if (!left && !right) {
      continue;
    }

    if (!left || !right || left.val !== right.val) {
      return false;
    }

    stack.push([left.left, right.right]);
    stack.push([left.right, right.left]);
  }

  return true;
}
