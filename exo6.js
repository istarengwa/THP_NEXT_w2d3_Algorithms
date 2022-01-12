// for start the program -> node exo6.js list2.txt 
// or node exo6.js list2-2.txt
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

function exerciceSix(array) {
  let result = 0
  if (array.length > 0 && array.length < 2){
    result = 1
  }
  for (let i = 0; i < array.length - 1; i++){ // boucle pour parcourir le tableau une fois
    arrayNew = array.slice(i + 1); // on crée un nouveau tableau constitué de i+1 à la fin du tableau
    if(Math.max(...arrayNew) < array[i]){
      result += 1;
    }
  }
  return result + 1;
}

myResult.arr = exerciceSix(list);
console.log(`Exercice 2 : Liste : ${list} => ${myResult.arr}.`);