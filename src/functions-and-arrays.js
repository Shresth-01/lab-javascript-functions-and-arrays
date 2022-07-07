// Progression #1: Greatest of the two numbers
  function greatestOfTwoNumbers(n1,n2){
    if(n1>n2){
      return n1
    }
    else{
      return n2
    }
  }

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(arr){
  if(arr.length == 0){
    return null
  }
  var max = 0,curr = 0,i=0
  for (let index = 0; index < arr.length; index++) {
    curr = arr[index].length;
    if(curr>max){
    max = curr
    i = index
  }
  return arr[arr.indexOf(arr[i])]
  }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(arr){
var sum=0
for (let index = 0; index < arr.length; index++) {
   sum += arr[index];
 }
 return sum
}
// Bonus: Calculate the sum
function add(arr){
  var sum =0
  if(arr.length == 0){
    return 0
  }
  if(arr.length == 1){
    return arr[0];
  }
  for (let index = 0; index < arr.length; index++) {
    if (typeof arr[index] == 'number') {
      sum += arr[index];
    }
    else if (typeof arr[index] == 'string') {
      sum += arr[index].length;
    }
    else if (typeof arr[index] == true) {
      sum +=1;
    }
    else if (typeof arr[index] == false) {
      sum +=0;
    }
    else throw Error('unsupported data type (object or array) present in the array');
    }
  return sum;
}

// Progression #4: Calculate the average
function midPointOfLevels(arr){
  if(arr.length == 0){
    return null
  }
  var count = 0,sum = 0
  for (let index = 0; index < arr.length; index++) {
    count++
    sum += arr[index];
  }
  return sum/count
}
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(arr){

  if(arr.length == 0){
    return null
  }
  var count = 0,sum = 0
  for (let index = 0; index < arr.length; index++) {
    count++
    sum += arr[index];
  }
  return sum/count
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arr){
  if(arr.length == 0){
    return null
  }
  var count = 0,sum = 0
  for (let index = 0; index < arr.length; index++) {
    count++
    sum += arr[index].length;
  }
  return sum/count
}
//Progression 4.3: Array of mixed 
function avg(arr){
  if(arr.length == 0){
    return null
  }
  let count = 0,sum = 0
  for (let index = 0; index < arr.length; index++) {
    var val = arr[index];
    if (typeof arr[index] == 'number') {
      sum += val;
      count++
    }
    if (typeof arr[index] == 'string') {
      sum += val.length;
      count++
    }
    if (typeof arr[index] == true) {
      sum +=1;
      count++
    }
    if (typeof arr[index] == false) {
      sum +=0;
      count++
    }
  }
  return sum/count
}
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(arr) {
  if(arr.length == 0){
    return null
  }
  let unique = arr.filter((c,index)=>{
    return arr.indexOf(c) == index;
  });
  return unique
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

 function searchElement(arr,word) {

  if (arr.length == 0) {
    return null
  }
  for (let index = 0; index < arr.length; index++) {
    if (word == arr[index]) {
      return true
    }
  }
  return false
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(arr,word){

  var count = 0
  for (let index = 0; index < arr.length; index++) {
    if(arr[index] == word) {
      count++;
    }
    
  }
  return count
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix){
    var product = 1
    for (let index = 0; index < matrix.length; index++) {
      product *= matrix[index][index];
    }
    return product
}