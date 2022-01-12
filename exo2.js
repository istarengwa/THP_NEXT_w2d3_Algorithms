// for start the program -> node exo2.js list2.txt 
// or node exo2.js list2-2.txt
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

function westEst(array, viewEst = 0) {
  for (let i=0;i<array.length;i++) {
    let tmpView = true;
    for (let j=i+1;j<array.length;j++) {
      if (array[i] <= array[j]) {
        tmpView = false;
      }
    }
    if (tmpView) viewEst++;
  }
  return viewEst;
}


myResult.arr = westEst(list);
console.log(`Exercice 2 : Liste : ${list} => ${myResult.arr}.`);