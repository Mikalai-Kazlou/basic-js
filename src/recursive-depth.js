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
  }

  calculateDepth(arr) {
    if (this.level === 0) {
      this.depth = 0;
    }

    if (Array.isArray(arr)) {
      this.level += 1;
      this.depth = Math.max(this.depth, this.level);

      arr.forEach(item => {
        this.calculateDepth(item);
      });

      this.level -= 1;
      return this.depth;
    }
  }
}

module.exports = {
  DepthCalculator
};
