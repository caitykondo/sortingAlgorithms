let arr = [6,5,3,1,8,7,2, 4];

function insertionSort(arr) {

  for(var i = 1; i < arr.length; i++) {
    let num = arr[i];
    let prev = i - 1;

    while(prev >= 0 && arr[prev] > num){
      arr[ prev + 1 ]  = arr[prev];
      prev--;
    }
    arr[prev + 1] = num;
  }
return arr;
}

console.log(insertionSort(arr));


