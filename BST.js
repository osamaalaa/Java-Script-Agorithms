
// search with a given value (key)  3la el array
// hncode be recusive way f 3ndna el base case wel recursion case
// 27na hna hn assume 2n el array sorted
function binarySearch(numArray, key){
  var middleIndex = Math.floor(numArray.length / 2);
  var middleElem = numArray[middleIndex];

  if(middleElem === key) return true;   // base case

  else if (middleElem < key && numArray.length > 1)
  {
    return binarySearch(numArray.splice(middleIndex,numArray.length),key);

  }
  else if (middleElem > key && numArray.length > 1 )
  {
    return binarySearch(numArray.splice(0,middleIndex), key);
  }
  else return false;

}

binarySearch([5,7,12,36,39,42,56,71], 56);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
