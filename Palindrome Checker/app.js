function palindrome(str) {
  const len = str.length;
  const strDuplicate = str;
  let revStr = "";
  for(let i=0; i<len; i++)
  {
     revStr = revStr + str[len -1 -i];
  }
  if (revStr == strDuplicate){
      return true;
  }
  else{
      return false;
  }
}



console.log(palindrome("mom"));