
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
