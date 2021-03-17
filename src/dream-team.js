const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  
if (!Array.isArray(arr)) {
  return false;
}

else {
  let arrdream = [];
  for(i=0; i<arr.length; i++){
    if (typeof arr[i] === 'string') {
      arrdream.push(arr[i].toUpperCase().trim().slice(0, 1)); 
    }
  }

  return arrdream.sort().join("");
}
};