// for start the program -> node exo1.js list1.txt 
// or node exo1.js list1-2.txt
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

function sumOfTwo (array, k) {
  for (let i=0;i<array.length - 1;i++) {
    let r = array[i];
    for (let j=0;j<array.length;j++) {
      let result = array[i] + array[j];
      if (result == k) {
        return true;        
      }
    }
  }
  return false;
}

myResult.arr = sumOfTwo(list, k);
console.log(`Exercice 1 : Liste : ${list} Number : ${k} => ${myResult.arr}.`);
