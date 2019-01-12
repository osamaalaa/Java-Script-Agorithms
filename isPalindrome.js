function isPalindrome(string){
  string = string.toLowerCase();
  var charsArr = string.split('');
  var validChar = 'abcdefghigklmnopqrstuvwyz'.split('');
  var lettersArr= [];
  charsArr.forEach(char => {
    if (validChar.indexOf(char) > -1)lettersArr.push(char);

  });
  if(lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

console.log(isPalindrome("Osama Alaa"));
