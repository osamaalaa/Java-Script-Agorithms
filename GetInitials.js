function getInitials(name){
  let split = name.split(" ").map((word)=>{
    return word[0];

  }).join('&');

  return split;
}
console.log(getInitials("Osama Alaa Mahmoud"));
