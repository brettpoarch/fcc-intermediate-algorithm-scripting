
//funtion instructions. We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
function sumAll(arr) {
  arr.sort(function(a,b){
    return a - b
  }) 

  if(arr[0] < arr[1]){
    let count = 0;
    for (let i = arr[0]; i <= arr[1]; i++){
      count = count + i;
    }
    return count;
  }
}

sumAll([4, 1]);


//function instructions. Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays
function diffArray(arr1, arr2) {
  var newArr = [];
  arr1.map(function(arr){
    //console.log(arr2.indexOf(arr))
    if (arr2.indexOf(arr) < 0){
      newArr.push(arr)
    }
  })
  arr2.map(function(arr){
    if (arr1.indexOf(arr) < 0){
      newArr.push(arr)
    }
  })
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



//function instructions. You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
 let args = Array.prototype.slice.call(arguments, 1)
 let newArr = []
 arr.map(function(num){
   if(args.indexOf(num) < 0){
     newArr.push(num)
   }
 })
 return (newArr)
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


//function instructions. Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
 
}

spinalCase("thisIsSpinalTap");

//function instructions. Translate the provided string to pig latin.
function translatePigLatin(str) {
 if(str.match(/^[aeiou]/)){
    return str + 'way'
  } else if (str.match(/[^aeiou]+$/gi)){
    console.log('a')  
  } 
  let newArr = []
  let arr = str.split(/([aeiou].*)/)
  newArr.push(arr[1], arr[0] + 'ay')
  str = newArr.join('')
  return str
}

translatePigLatin("california");



//function instructions. Perform a search and replace on the sentence using the arguments provided and return the new sentence. Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()){
    let newAfter = after.charAt(0).toUpperCase() + after.slice(1)
    return str.replace(before, newAfter)
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");


//function instrucions.The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
function pairElement(str) {
  let arr = str.split('');
  let newArr = []
  //console.log(arr)
  for (let i = 0; i < arr.length; i++){
    if(arr[i] == 'G'){
      newArr.push(['G', 'C']);  
    } else if (arr[i] == 'C'){
      newArr.push(['C', 'G']);
    } else if (arr[i] == 'A'){
      newArr.push(['A', 'T']);
    } else if (arr[i] == 'T'){
      newArr.push(['T', 'A']);
    }
  }
  return newArr
}

pairElement("ATCGA");



//function instructions. Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.

If all letters are present in the range, return undefined.
function fearNotLetter(str) {
  let num = str.charCodeAt(0)
  for (let i = 0; i < str.length; i++){
    if(str.charCodeAt(i) != num){
      return String.fromCharCode(num)  
    }
    num++
  }

  return undefined;
}

fearNotLetter("abce");


//function instructions. Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
function uniteUnique(arr) {
  let args = Array.prototype.slice.call(arguments)
  for (let i = 0; i < args.length; i++){
    for (let j = 0; j < args[i].length; j++){
      if (arr.indexOf(args[i][j]) < 0){
        arr.push(args[i][j])
      }
    }
  }
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


//function instructions. Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
 return str.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/'/g, '&apos;').replace(/"/g, '&quot;');

}

convertHTML('Stuff in "quotation marks"');


//function instructions. Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
function sumFibs(num) {
  let sum = 2
  let prior = 2
  let current = 1
  let placeholder = 0
  while (current < num + 1){
    if(num == 1){
      return 1
    } else if (current == 1){
      current += 2
    } else if(current > 1) {
       if(current % 2 != 0){
        sum = sum + current
      }
      placeholder = current
      current = current + prior
      prior = placeholder
    }
  }  
return sum;
}

sumFibs(75025);


// function instructions. A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
function sumPrimes(num) {
  let sum = 2
  while (num > 2){
    for(let i = num - 1; i > 1; i-- ){
      if(num % i == 0){
        num--
        i = num
      } else if(i == 2){
        sum += num
        num--
        i = num
      }
      
    }
    
  }
  return sum;
}

sumPrimes(977);

//function instructions. Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
function smallestCommons(arr) {
  let newArr = [], multiplier = 2
  arr.sort(function(a,b){
    return b - a;
  })

  for(let i = arr[0]; i >=arr[1]; i--){
    newArr.push(i)
  }
 
  for (let j = 0; j < newArr.length; j++){
    if ((newArr[0] * multiplier) % newArr[j] !== 0){
      multiplier += 1
      j = 0
    }
  }

  return newArr[0] * multiplier 
}


smallestCommons([23,18]);

//After reading through the forum on this challange I went back and completed this function 2 ways and I feel like the second is much cleaner. function instructions. Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
function dropElements(arr, func) {
  let count = 0
  for(let i = 0; i < arr.length; i++){
    if (func(arr[i]) === false){
      count = (arr[i]);
      if(count == 0){
        count = 1
      }
    }   
  }
  return arr.slice(count);
}

dropElements([0, 1, 0, 1], function(n) {return n === 0; });

function dropElements(arr, func) {
  let times = arr.length
  for(let i = 0; i < times; i++){
    if (func(arr[0])){
      return arr
      } 
      arr.shift()
    }  
  console.log(arr)
  return arr;
}

dropElements([1,2,3,4], function(n) {return n > 5; });

//function instructions. Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
  for (var i = 0; i<=arr.length; i++){
    if (Array.isArray(arr[i]) === true){
      arr = arr.reduce(function (a, b){
        return a.concat(b)
      },[]); 
    i=0;
  }    
  
  }
  //console.log(newArr)
  console.log(arr)
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);


//function instructions. Return an English translated sentence of the passed binary string.
function binaryAgent(str) {
  return str.split(' ').map(function(code){
      return String.fromCharCode(parseInt(code, 2));
  }).join('')
}

//function instructions. Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre) {
  let newArr = []
  for(let i = 0; i < collection.length; i++){
    if(collection[i][pre]){
      newArr.push(collection[i][pre])
    }
  }
  if(newArr.length != collection.length){
    return false
  }  
 return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": NaN}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


//function instructions. Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
function addTogether() {
  let args = arguments

  for(let i = 0; i < args.length; i++){
    if (typeof(args[i]) !== 'number'){
      return undefined
    }
  }
  
  if(args.length == 2){
    return args[0] + args[1]
  } else if (args.length == 1 && typeof(args[0]) === 'number'){
    return function(num){
      if(typeof(num)==='number'){
        return args[0] + num
      }
    } 
  }

  return false;
}

addTogether(3)(2);



