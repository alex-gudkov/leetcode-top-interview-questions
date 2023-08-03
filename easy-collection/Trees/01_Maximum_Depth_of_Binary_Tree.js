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
 * @param {number} depth Default argument.
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

function __maxDepth(root) {
  if (!root) {
    return 0;
  }

  const stack = [{ root, depth: 1 }];
  let maxDepth = 1;

  while (stack.length) {
    const node = stack.pop();

    if (!node.root) {
      continue;
    }

    if (node.depth > maxDepth) {
      maxDepth = node.depth;
    }

    if (node.root.left) {
      stack.push({ root: node.root.left, depth: node.depth + 1 });
    }

    if (node.root.right) {
      stack.push({ root: node.root.right, depth: node.depth + 1 });
    }
  }

  return maxDepth;
}

const { TreeBuilder } = require('./00_Tree_Builder');

const root = TreeBuilder.fromArray([3, 9, 20, null, null, 15, 7]);

console.log(__maxDepth(root));
