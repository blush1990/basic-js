const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(dateseas) {
    
  if(dateseas == undefined) {
		return 'Unable to determine the time of year!';
	} else if(dateseas.hasOwnProperty('toString')) {
		throw new Error;
	};
    let numberseason = Date.prototype.getMonth.call(dateseas);
    let season = '';
    switch(String(numberseason)) {
      case '0': 
      case '1':  
      case '11': 
      season = 'winter';
        break;
      case '2': 
      case '3':  
      case '4': 
      season = 'spring';
        break;
      case '5':
      case '6':  
      case '7': 
      season = 'summer';
        break;
      case '8': 
      case '9':  
      case '10': 
      season = 'autumn';
        break;
      default:
      season = 'Unable to determine the time of year!';
      break;
    }
    return season;
  };
