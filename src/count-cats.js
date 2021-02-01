const CustomError = require("../extensions/custom-error");

module.exports = function countCats(countCats) {
  let res = 0; 
  for (let i=0; i<countCats.length; i++){
    let ind = countCats[i].indexOf('^^');
      if (ind !== -1){
        res += 1;
        delete countCats[i][ind];
        i = i - 1;
      }  
  }
  return res;
};
