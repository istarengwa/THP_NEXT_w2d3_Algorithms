// Pour lancer le programme -> node merge.js list.txt
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
  constructor(arr=[], nb=0) {
    this.arr = arr;
    this.nb = nb;
  }
}

let myResult = new Result;

let list = getFile().split(" ").map(n => parseInt(n, 10));

function merge(left, right) {
  let arr = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    }
    else {
      arr.push(right.shift());
    }
  }

  return [ ...arr, ...left, ...right];
}


function mergeSort (array) {
  const mid = array.length / 2;

  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, mid);

  return merge(mergeSort(left),mergeSort(array));
}

myResult.arr = mergeSort(list);
console.log(`Tri fusion => ${myResult.arr}.`);