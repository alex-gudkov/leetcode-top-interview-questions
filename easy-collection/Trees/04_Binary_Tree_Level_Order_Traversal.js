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
 * @return {number[][]}
 */
function levelOrder(root) {
  if (!root) {
    return [];
  }

  let queue = [root];
  const levels = [];

  while (queue.length) {
    const nextQueue = [];
    const levelNodes = [];

    for (const node of queue) {
      levelNodes.push(node);

      if (node.left) {
        nextQueue.push(node.left);
      }

      if (node.right) {
        nextQueue.push(node.right);
      }
    }

    queue = nextQueue;
    levels.push(levelNodes);
  }

  return levels;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function _levelOrder(root) {
  if (!root) {
    return [];
  }

  const queue = [root];
  const levels = [];

  while (queue.length) {
    const levelNodes = [];

    for (let i = queue.length; i > 0; i--) {
      const node = queue.shift();

      levelNodes.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    levels.push(levelNodes);
  }

  return levels;
}
