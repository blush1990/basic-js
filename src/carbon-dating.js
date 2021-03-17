const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(num) {
  let res = 0;
  if (typeof(num) === 'string') {
  if (typeof(Number(num)) === typeof(1)) {
    if (Number(num) >= 1 && Number(num) <= 15) {
     return res = Math.ceil(Math.log(MODERN_ACTIVITY/Number(num))/(0.693/HALF_LIFE_PERIOD))
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}
else return false;
};
