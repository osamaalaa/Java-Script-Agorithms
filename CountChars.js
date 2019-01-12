const string ="hello world";

const histogram ={};

for (let i=0; i<string.length; i++){
  const ch = string[i];
  // if(!histogram[ch]){
  //   histogram[ch] = 0;
  // }
  // histogram[ch]++;
  //-----------------------------------

  histogram[ch] = (histogram[ch] || 0) +1   // mmkn tkon undefined 2w 0 and +1 to it 
}
console.log(histogram);
