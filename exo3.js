// for start the program -> node exo3.js list1.txt 
// or node exo3.js list1-2.txt
const fs = require('fs');
const nbList = process.argv[2];

function getFile() {
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

function jenAiRaLcu(array, k) {
  for (let i = 0; i < array.length - 1; i++) {
    // NB Declaring an array and slicing/splicing it will return the removed element(s) whereas it won't if you do it separately.
    let workingArr = [...array];
    if (workingArr.includes(k - array[i])) {
      return true;
    }
  }
  return false;
}

myResult.arr = jenAiRaLcu(list, k);
console.log(`Exercice 3 : Liste : ${list} Number : ${k} => ${myResult.arr}.`);
