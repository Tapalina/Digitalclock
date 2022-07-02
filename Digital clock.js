function calcTime(city,offset){
    var b=newDate()
    var utc=b.getTime()+(b.getTimezoneOffset()*60000);
    var nd=newDate(utc+(3600000*offset));
    return"the local time of "+city+" is "+nd.tolocaleString();
}
console.log(calcTime('argentina','='))