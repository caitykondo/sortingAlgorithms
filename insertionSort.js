// let arr = [6,5,3,1,8,7,2, 4];
let arr = [5, 3, 2];

function insertionSort(arr) {
  // take 2nd of the array and compare with the 1st
  // if smaller switch
  // compared third with 2 and 1 and move accordingly

  function checkVal(arr, i) {

    let num = arr[i];

    // for(i = 0; i > 0; i--){
      // compares set num to values in arr before num's i
      while(num < arr[i-1] && num > 0){
        i--;
         //0 0 3
      }
      if(num < arr[i]){
        arr.splice(i+1, 1); // i = 1
        arr.splice(i, 0 , num);
        return;
      }
      checkVal(arr, i+1);
    // }
  }

  for(i = 1; i < arr.length; i++){
    checkVal(arr, i++);
  }
  return arr;
}

console.log(insertionSort(arr));