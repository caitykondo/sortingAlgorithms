let arr = [6,5,3,1,8,7,2, 4];

function selectionSort(arr) {

  for(i = 0; i < arr.length; i++){
    for (j = 0; j < arr.length; j++){

      if(arr[i] < arr[j]){
        let num = arr[i];
        arr[i] = arr[j];
        arr[j] = num;
      }
    }
  }
  return arr;
}
console.log(selectionSort(arr));