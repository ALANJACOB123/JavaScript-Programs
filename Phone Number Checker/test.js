function telephoneCheck(str) {
    const checkFormat = /^[1]?\s*?((\(\d{3}\))|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if(str.match(checkFormat)){
       return true;
    }
    else{
       return false;
    }
}

telephoneCheck("555-555-5555");