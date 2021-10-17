function telephoneCheck(str) {
    const checkFormat1 = /\d{3}-\d{3}-\d{4}/;
    const checkFormat2 = /\(?\d{3}[\)-]?\d{3}-\d{4}/;
    const checkFormat3 = /\(?\d{3}[\)-\s]?\d{3}-\d{4}/;
    const checkFormat4 = /\d{3}\s\d{3}\s\d{4}/;
    const checkFormat5 = /\d{3}\d{3}\d{4}/;
    const checkFormat6 = /^[1]?\s?\d{3}\s\d{3}\s\d{4}/;
    if(str.match(checkFormat1))
    {
        console.log(true);
    }
    else if(str.match(checkFormat2))
    {
        console.log(true);
    }
    else if(str.match(checkFormat3))
    {
        console.log(true);
    }
    else if(str.match(checkFormat4))
    {
        console.log(true);
    }
    else if(str.match(checkFormat5))
    {
        console.log(true);
    }
    else if(str.match(checkFormat6))
    {
        console.log(true);
    }
    else
    {
        console.log(false);
    }
}

telephoneCheck("1 555)555-5555");