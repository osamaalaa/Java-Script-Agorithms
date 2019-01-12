function caesarCipher(str,num){
  num = num % 26;
  var lowerCase = str.toLowerCase();
  var alphArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';


  for(var i = 0; i < lowerCase.length; i++){
    var curLetter = lowerCase[i];
    if(curLetter === ' '){
      newString += curLetter;
      continue;
    }
    var curIndex = alphArr.indexOf(curLetter);
    var newIndex = curIndex + num ;
    if (newIndex > 25 ) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    
    newString += alphArr[newIndex];

  }

  return newString;
}


// el algorithm ma4e 2zay bya5od string w number .. w kol char fel string byshift forward 3la 7sp el number el da5le

console.log(caesarCipher('zoo Keeper', 2));
