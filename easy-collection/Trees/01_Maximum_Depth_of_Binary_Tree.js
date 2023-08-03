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
 * @return {number}
 */
function maxDepth(root, depth = 0) {
  if (!root) {
    return depth;
  }

  const leftDepth = maxDepth(root.left, depth + 1);
  const rightDepth = maxDepth(root.right, depth + 1);

  return leftDepth > rightDepth ? leftDepth : rightDepth;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function _maxDepth(root) {
  if (!root) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

const { TreeBuilder } = require('./00_Tree_Builder');

const root = TreeBuilder.fromArray([3, 9, 20, null, null, 15, 7]);

console.log(maxDepth(root));
