
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

