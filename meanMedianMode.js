function getMean(array) {
  // ngep el mean 2zay :  hyp2a magmo3 el array 3la 3dadhm
  var sum = 0;
  array.forEach(num => {
    sum += num;

  });
  var mean = sum / array.length;
  return mean;
}


function getMedian(array){
  // el median hwa 27na 2wl 7aga 3ndna el array bn3mlha sorting w b3den bngep el median lel array e 2t3mlha sorting
  array.sort(function(a,b){
    return a - b;
  });
  // kda 27na 3mlnlha sorting n4of p2a hya even wla odd
  // lw odd : 27na ngep el fel nos
  if (array.length % 2 !===0){

    median array[math.floor(array.length / 2)];
  }
  // lw even 2na p2sm el array le qt3ten

  else {
    var mid1 = array[(array.length / 2) - 1];  // el part el 2wl
    var mid2 = array[(array.length / 2)]; // el part 2
    median = (mid1 + mid2 ) / 2 ;
  }
  return median ;
}

// el mode el hwa eh el raqm el byzhar 2ktr fel array ( appear Most )

function getMode(array){
  // n3ml el hashtable bta3na as an object
  var modObj = {};
  array.forEach(num =>{
    if(!mode)

  });






}

function meanMedianMode(array){
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  };


}
