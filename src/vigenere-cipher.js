const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(boole = true){
    this.boole = boole;
  }
  encrypt(a, b) {
    if (!a || !b) throw new Error ('Error');

    if (a.length>b.length) {
      b = b.toUpperCase().repeat(Math.ceil(a.length / b.length));
      a = a.toUpperCase();
    }
    else {
        b = b.toUpperCase();
        a = a.toUpperCase();
    }
    
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let res = [];
    let result = [];
    let count = 0;
    for (let j = 0; j < a.length; j++) {
      if ((a.charCodeAt(j)-65) < 0){
        res.push(a[j]);
        count += 1;
      }
      else if ((a.charCodeAt(j)-90) > 0) {
        res.push(a[j])
      }
      else if (count == 0) {
        res.push((b.charCodeAt(j)-65) + a.charCodeAt(j)-65); 
      }
      else {
        res.push((b.charCodeAt(j-count)-65) + a.charCodeAt(j)-65);
      }
      
    }
    for (let i = 0; i < res.length; i++){
      if (arr[res[i]] === undefined || typeof(res[i]) == 'string'){
        result.push(res[i])
      }
      else {
        result.push(arr[res[i]]);
      }
    }
    if (this.boole){
      return result.join("").toUpperCase();
    }
      return result.reverse().join("").toUpperCase();
  }
  

  decrypt(a, b) {
    if (!a || !b) throw new Error ('Error');
    b = b.toUpperCase().repeat(Math.ceil(a.length / b.length));
    a = a.toUpperCase();
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let res = [];
    let result = [];
    let count = 0;
    for (let j = 0; j < a.length; j++) {
      if ((a.charCodeAt(j)-65) < 0){
        res.push(a[j]);
        count += 1;
      }
      else if ((a.charCodeAt(j)-90) > 0) {
        res.push(a[j])
      }
      else if (count == 0) {
        res.push(((a.charCodeAt(j) - b.charCodeAt(j))+26)); 
      }
      else {
        res.push(((a.charCodeAt(j) - b.charCodeAt(j-count))+26));
      }
    }
    
    for (let i = 0; i < res.length; i++){
      if (arr[res[i]] === undefined || typeof(res[i]) == 'string'){
        result.push(res[i])
      }
      else {
        result.push(arr[res[i]]);
      }
    }
    
    if (this.boole){
      return result.join("").toUpperCase();
    }
      return result.reverse().join("").toUpperCase();
  }

}

module.exports = VigenereCipheringMachine;
