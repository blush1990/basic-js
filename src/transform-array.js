const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)){
      throw new Error;
    }
    let arr2 = [...arr];
    for (let i=0; i<arr2.length; i++) {
      if (arr2[i] === '--discard-next') {
        if (i < (arr2.length-1)){
        arr2.splice(i+1, 1);
        }
      }
      else if (arr2[i] === '--discard-prev') {
        if (i > 0) {
        arr2.splice(i-1, 1);
        }
      }
      else if (arr2[i] === '--double-next') {
        if (i < (arr2.length-1)) {
          arr2[i]=arr2[i+1];
        }
      }
      else if (arr2[i] === '--double-prev'){
        if (i > 0) {
          arr2[i]=arr2[i-1];
        } 
      }        
    }
    return arr2.filter(value => {return value !== '--discard-next' && value !== '--discard-prev' && value !== '--double-next' && value !== '--double-prev' });
  };
