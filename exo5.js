// for start the program -> node exo5.js list1.txt 
// or node exo5.js list1-2.txt
const fs = require('fs');
const nbList = process.argv[2];

function getFile() {
  if (nbList === undefined) {
    throw new Error('Veuillez renseigner un nom de fichier.')
  }
  try {
    const data = fs.readFileSync(nbList, 'utf8');
    return data.length>0 ? data : console.error("Empty file.");
  } catch (error) {
    console.error(error.message);
  }
}

class Result {
  constructor(arr=[]) {
    this.arr = arr;
  }
}

let myResult = new Result;

let list = getFile().split(" ").map(n => parseInt(n, 10));

let k = 17

function improbableBoris(array, k) {
  if (array.filter(e => array.includes(k - e)).length > 1) {
    return true;
  }
  return false;
}

myResult.arr = improbableBoris(list, k);
console.log(`Exercice 1 : Liste : ${list} Number : ${k} => ${myResult.arr}.`);
