let arr = [10, 9, 0, 15, 11, 1, 100, 200, 11];
// let arr = [5,4,6,3,2,1];
// let arr = [10, 9,5,6,8,55];

function quickSort(arr) {
  let pivot = arr[0];
  let l = [];
  let r = [];

  arr.forEach((num, i)=>{
    if(i !== 0){
      if(num < pivot){
        l.push(num);
        console.log('l',l);
      }
      if(num >= pivot){
        r.push(num);
        console.log('r', r);
      }
    }
  });
  if(l.length <= 1){
    return l.concat(pivot, r);
  }
  quickSort(l);
  if(r.length <= 1){
    return l.concat(pivot, r);
  }
  quickSort(r);

  return quickSort(l).concat(pivot, quickSort(r));
}

console.log(quickSort(arr));