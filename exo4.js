// for start the program -> node exo4.js list2.txt 
// or node exo4.js list2-2.txt
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

let result = 1;

function jenAiMarre(array, i=0) {
  if (i>=array.length - 1) {
    return result;
  }
  array.slice(i+1).filter(e => array[i] <= e ).length == 0 ? result++ : null;
  return jenAiMarre(array, i+1);
}


myResult.arr = jenAiMarre(list);
console.log(`Exercice 4 : Liste : ${list} => ${myResult.arr}.`);