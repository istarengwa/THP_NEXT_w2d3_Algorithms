//// Exercice 1 

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

console.log("Exercice 1 :");
console.log(sumOfTwo([10, 15, 3, 7], 17));

//// Exercice 2

function viewCheck(arr) {
  let arrLength = arr.length;
  let viewtCtr = 0;
  for (i = 0; i < arrLength; i++) {
    let tmpView = true;
    for (j = i + 1; j < arrLength; j++) {
      if (arr[i] <= arr[j]) {
        tmpView = false;
      }
    }
  if (tmpView) viewtCtr++;
  }
  return viewtCtr;
}

console.log("Exercice 2 :");
console.log(viewCheck([3, 7, 8, 3, 6, 1]));

//// Exercice 3

function jenAiRaLcu(array, k, c = 0) {
  
}

console.log("Exercice 3 :");
console.log(jenAiRaLcu([10, 15, 3, 7], 17));


//// Exercice 4

console.log("Exercice 4 :");
console.log(viewCheck([3, 7, 8, 3, 6, 1]));

//// Exercice 5

function improbableBoris(array, k) {
  if (array.filter(e => array.includes(k - e)).length > 1) {
    return true;
  }
  return false;
}

console.log("Exercice 5 :");
console.log(improbableBoris([10, 15, 3, 7], 17));

// Exercice 6
// Résous le sujet 2 en ne faisant qu'un seul passage sur ta liste.
function exerciceSix(array) {
  let result = 0
  if (array.length > 0 && array.length < 2){
    result = 1
  }
// boucle pour parcourir le tableau une fois
  for (let i = 0; i < array.length - 1; i++){

// on crée un nouveau tableau constitué de i+1 à la fin du tableau
  arrayNew = array.slice(i + 1);
  if(Math.max(...arrayNew) < array[i]){
    result += 1;
  }
}
  return result + 1;
}

console.log("Exercice 6 :");
console.log(exerciceSix([3, 7, 8, 3, 6, 1]));