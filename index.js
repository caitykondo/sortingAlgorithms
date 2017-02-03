let arr = [1,9,7,4,5];
// [1,7,9,4,5]
// [1,7,4,9,5]
// [1,7,4,5,9]

function compareValues(arr) {
  for(let i = 0; i < arr.length; i++){
    let num = arr[i];
    let nextNum = arr[ i + 1 ];
    if(num > nextNum){
      arr.splice(i, 2, nextNum, num);
      changed = true;
      // was changed
    }else{}
  }
}

function bubbleSort(arr) {
  let changed = false;
  compareValues(arr);
  return arr;
}

console.log(bubbleSort(arr));