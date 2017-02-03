function compareValues(arr) {

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number'){
      let num = arr[i];
      let nextNum = arr[ i + 1 ];

      if(num > nextNum){
        arr.splice(i, 2, nextNum, num);
        return true;
      }
    }else{
      throw Error('invalid value in array');
    }
  }
}

function bubbleSort(arr) {
  while(compareValues(arr) === true){
    compareValues(arr);
  }
  return arr;
}

module.exports = bubbleSort;