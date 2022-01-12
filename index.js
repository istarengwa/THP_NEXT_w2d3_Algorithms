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

console.log("Exercice 2 :");
console.log(westEst([3, 7, 8, 3, 6, 1]));
console.log(westEst([1, 4, 5, 8]));

//// Exercice 3

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

console.log("Exercice 3 :");
console.log(jenAiRaLcu([10, 15, 3, 7], 17));

//// Exercice 4

function EncorePlus(array) {
  "non g pas triché";
}

console.log("Exercice 4 :");
console.log(westEst([3, 7, 8, 3, 6, 1]));

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