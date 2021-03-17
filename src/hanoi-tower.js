const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let numbermoves = Math.pow(2, disksNumber) - 1;
  let time = Math.floor(numbermoves/(turnsSpeed/(60*60)));
  return { turns: numbermoves, seconds: time };
};
