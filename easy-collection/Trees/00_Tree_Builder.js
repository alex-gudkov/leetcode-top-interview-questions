/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * Definition for a binary tree builder.
 */
class TreeBuilder {
  static #PRINT_BRANCH_LEFT = '└── ';
  static #PRINT_BRANCH_RIGHT = '┌── ';
  static #PRINT_BRANCH = '│   ';
  static #PRINT_SPACE = '    ';

  constructor() {}

  /**
   * @param {TreeNode} root
   * @param {string} prefix Default argument.
   * @param {boolean} isLeft Default argument.
   * @return {void}
   */
  static print(node, prefix = '', isLeft = true) {
    if (!node) {
      return;
    }

    if (node.right) {
      TreeBuilder.print(node.right, prefix + (isLeft ? this.#PRINT_BRANCH : this.#PRINT_SPACE), false);
    }

    console.log(prefix + (isLeft ? this.#PRINT_BRANCH_LEFT : this.#PRINT_BRANCH_RIGHT) + node.val);

    if (node.left) {
      TreeBuilder.print(node.left, prefix + (isLeft ? this.#PRINT_SPACE : this.#PRINT_BRANCH), true);
    }
  }

  /**
   * @param {TreeNode} root
   * @return {void}
   */
  static toArray(root) {
    const arr = [];

    if (!root) {
      return arr;
    }

    const nodesQueue = [];

    nodesQueue.push(root);

    while (nodesQueue.length > 0) {
      const node = nodesQueue.shift();

      if (!node) {
        arr.push(null);

        continue;
      }

      arr.push(node.val);

      nodesQueue.push(node.left);
      nodesQueue.push(node.right);
    }

    return arr;
  }

  /**
   * @param {number[]} arr
   * @return {TreeNode}
   */
  static fromArray(arr) {
    if (arr.length === 0) {
      return null;
    }

    const rootValue = parseInt(arr[0]) ?? null;
    const root = new TreeNode(rootValue);
    const nodesQueue = [root];

    let i = 1;
    let val;

    while (i < arr.length) {
      const node = nodesQueue.shift();

      val = arr[i];
      i++;

      if (val) {
        const leftValue = parseInt(val);

        node.left = new TreeNode(leftValue);
        nodesQueue.push(node.left);
      }

      if (i >= arr.length) {
        break;
      }

      val = arr[i];
      i++;

      if (val) {
        const rightValue = parseInt(val);

        node.right = new TreeNode(rightValue);
        nodesQueue.push(node.right);
      }
    }

    return root;
  }
}

module.exports = {
  TreeBuilder,
};

/* Sample usage
 * const arr = [3, 9, 20, null, null, 15, 7];
 * const root = TreeBuilder.fromArray(arr);
 *
 * TreeBuilder.print(root);
 * console.log(TreeBuilder.toArray(root));
 */
