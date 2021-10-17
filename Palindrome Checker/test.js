function palindrome(str) {
const newStr = makeCorrectStr(str);
const len = newStr.length;
  const strDuplicate = newStr;
  let revStr = "";
  for(let i=0; i<len; i++)
  {
     revStr = revStr + newStr[len -1 -i];
  }
  if (revStr == strDuplicate){
      return true;
  }
  else{
      return false;
  }
}

function makeCorrectStr(str){
let uselessThings = /[^a-zA-Z]/g;
let correctStr = str.replace(uselessThings, "");
// return correctStr;
console.log(correctStr.toLowerCase());
}

console.log(palindrome("A man, a plan, a canal. Panama"));