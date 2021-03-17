const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) { 
    let maxDepth = 0; 
    if (!Array.isArray(arr)) {
      return 0
    } 
    else {
      for (let pos in arr) { 
        let depth = this.calculateDepth(arr[pos]); 
        if (depth > maxDepth) {
          maxDepth = depth;
        }
      } 
      return maxDepth + 1; 
    };
  }
};



