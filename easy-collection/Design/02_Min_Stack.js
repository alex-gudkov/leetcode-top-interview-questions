function MinStack() {
  this.stack = [];
  this.minStack = [];
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  const minValue =
    this.minStack.length > 0 ? Math.min(val, this.minStack[this.minStack.length - 1]) : val;

  this.minStack.push(minValue);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

function _MinStack() {
  this.stack = [];
  this.n = 0;
}

/**
 * @param {number} val
 * @return {void}
 */
_MinStack.prototype.push = function (val) {
  const minVal = this.n ? Math.min(val, this.stack[this.n - 1].minVal) : val;

  this.stack[this.n] = { val, minVal };
  this.n++;
};

/**
 * @return {void}
 */
_MinStack.prototype.pop = function () {
  this.n--;
  this.stack.splice(this.n, 1);
};

/**
 * @return {number}
 */
_MinStack.prototype.top = function () {
  return this.stack[this.n - 1].val;
};

/**
 * @return {number}
 */
_MinStack.prototype.getMin = function () {
  return this.stack[this.n - 1].minVal;
};

/**
 * Your MinStack object will be instantiated and called as such:
 */
const ms = new MinStack();

ms.push(2);
ms.push(0);
ms.push(-4);
ms.push(1);
ms.pop();

const x = ms.top();
const min = ms.getMin();

console.log(x, min);
