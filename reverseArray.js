function reverseArray(arr){

    for(var i =0 ; i < arr.length / 2; i++){
      var temp = arr[i];
      arr[i] = arr[arr.length -1 - i];    // arr.length -1 dh el last element in the array
      arr[arr.length -1 - i] = temp;
    }
    return arr;
}

// reverse array without reverseArray Method

console.log(reverseArray([1,2,3,4,5,6]));
