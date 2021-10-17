const format = /^[!@#$%^&*() _+\-=\[\]{};':"\\|,.<>\/?]*$/;



function rot13(str) {
let newStr ="";
const strLen = str.length;
for (let i=0; i<strLen; i++){
    let varAscii = 0;
    if(str[i].match(format)){
        newStr = newStr + str[i];
    }
    else{
        varAscii = str[i].charCodeAt(0);
        varAscii += 13;
        if(varAscii>90){
            varAscii -= 26;
        }
        newStr = newStr + String.fromCharCode(varAscii);
    }
}
console.log(newStr);
}

rot13("SERR PBQR PNZC");