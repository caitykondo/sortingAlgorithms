let arr = [1,9,7,4,5, 25 , 0, 100, 3 ];
// [1,7,9,4,5]
// [1,7,4,9,5]
// [1,7,4,5,9]

function compareValues(arr) {

  for(let i = 0; i < arr.length; i++){
    let num = arr[i];
    let nextNum = arr[ i + 1 ];

    if(num > nextNum){
      arr.splice(i, 2, nextNum, num);
      return true;
    }
  }
}

function bubbleSort(arr) {
  while(compareValues(arr) === true){
    compareValues(arr);
  }
  return arr;
}

console.log(bubbleSort(arr));