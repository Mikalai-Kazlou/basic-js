const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 0;
    this.level = 0;
    this.result = 0;
  }

  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      this.level += 1;
      this.depth = Math.max(this.depth, this.level);

      arr.forEach(item => {
        this.calculateDepth(item);
      });
    }

    if (Array.isArray(arr)) {
      this.level -= 1;
      this.result = this.depth;
    }

    if (!this.level) {
      this.depth = 0;
      return this.result;
    }
  }
}

module.exports = {
  DepthCalculator
};
