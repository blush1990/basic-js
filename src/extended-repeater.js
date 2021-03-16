const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str)
  let separ = "+";
  let additionSepar = "|";
  let strin = str;
  if (options.repeatTimes == 1 || options.repeatTimes === undefined){
    if( options.additionRepeatTimes <= 1){
        if('addition' in options){
          str += options.addition;
        }
        if ('additionSeparator' in options){
          str += options.additionSeparator;
        }
        else {
          str += additionSepar;
        }
      return str;
    }
    else if (options.additionRepeatTimes > 1){
      for(let i = 1; i <= options.additionRepeatTimes; i++){
        if('addition' in options){
          str += options.addition;
        }
        if ('additionSeparator' in options){
          str += options.additionSeparator;
        }
        else {
          str += additionSepar;
        }
      }
      return str.substring(0, str.length - options.additionSeparator.length);
    }
    else {
      if('addition' in options){
        str += options.addition;
      }
      return str;
    }
    
  }
  else {
    for (let j = 1; j <= options.repeatTimes; j++){
      if( options.additionRepeatTimes <= 1 || options.additionRepeatTimes === undefined){
        if('addition' in options){
          str += options.addition;
        }
        if ('additionSeparator' in options && options.additionRepeatTimes != 1){
          str += options.additionSeparator;
        }
        if ('separator' in options) {
          str += options.separator + strin;
        }
        else {
          str += separ + strin;
        }
      }
      else {
        for(let i = 1; i <= options.additionRepeatTimes; i++){
          if('addition' in options){
            str += options.addition;
          }
          if ('additionSeparator' in options){
            str += options.additionSeparator;
          }
          else {
            str += additionSepar + options.addition;
          }
          }
          str = str.substring(0, str.length - options.additionSeparator.length);
          str += options.separator + strin;
      }
    
    }
    
  }
  if('addition' in options){
    return str.substring(0, str.length - options.separator.length - strin.length);
  }
  else if ('separator' in options){
    return str.substring(0, str.length - options.separator.length - strin.length);
  }
  else {
    return str.substring(0, str.length - separ.length - strin.length);
  }
};