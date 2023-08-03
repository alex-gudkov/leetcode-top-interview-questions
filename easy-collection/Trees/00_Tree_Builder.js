class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class TreeBuilder {
  static #PRINT_BRANCH_LEFT = '└── ';
  static #PRINT_BRANCH_RIGHT = '┌── ';
  static #PRINT_BRANCH = '│   ';
  static #PRINT_SPACE = '    ';

  static print(node, prefix = '', isLeft = true) {
    if (!node) {
      return;
    }

    if (node.right) {
      TreeBuilder.print(node.right, prefix + (isLeft ? this.#PRINT_BRANCH : this.#PRINT_SPACE), false);
    }

    console.log(prefix + (isLeft ? this.#PRINT_BRANCH_LEFT : this.#PRINT_BRANCH_RIGHT) + node.val);

    if (node.left) {
      TreeBuilder.print(node.left, prefix + (isLeft ? '    ' : '│   '), true);
    }
  }

  static toArray(root) {
    const array = [];

    if (!root) {
      return array;
    }

    const nodesQueue = [];

    nodesQueue.push(root);

    while (nodesQueue.length > 0) {
      const node = nodesQueue.shift();

      if (!node) {
        array.push(null);

        continue;
      }

      array.push(node.val);

      nodesQueue.push(node.left);
      nodesQueue.push(node.right);
    }

    return array;
  }

  static fromArray(array) {
    if (array.length === 0) {
      return null;
    }

    const rootValue = parseInt(array[0]) ?? null;
    const root = new TreeNode(rootValue);
    const nodesQueue = [root];

    let i = 1;
    let val;

    while (i < array.length) {
      const node = nodesQueue.shift();

      val = array[i];
      i++;

      if (val) {
        const leftValue = parseInt(val);

        node.left = new TreeNode(leftValue);
        nodesQueue.push(node.left);
      }

      if (i >= array.length) {
        break;
      }

      val = array[i];
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
 * const array = [3, 9, 20, null, null, 15, 7];
 * const root = TreeBuilder.fromArray(array);
 *
 * TreeBuilder.print(root);
 * console.log(TreeBuilder.toArray(root));
 */
