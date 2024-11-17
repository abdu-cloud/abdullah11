/* NUMBER???*/ 
function isnumberString(valstirng)
{
if(valstirng.length==0) return false;
for (var i=0 ;i< valstirng.length;i++) {
    var tempChar=valstirng.charAt(i);
    if(tempChar<'0'||tempChar>'9')
    return false;
}
return true;
}
/******************is empty***************************/
function isEmpty(value){
if(value==null|| value=="")
{return true}
return false;
}
//************in Range********************* */
function inRange(value){
    //convert string to num
if(value.length>11||value.length<11){
    return false;
}
return true
}
/**************IS valid**************** */
function isvalidphone(inString){
if(isEmpty(inString)){
    alert("please enter your phone num");
    return false;
}
else if(!isnumberString(inString))
{
alert("plese enter only numbers in phone field");
return false;
}
else if(!inRange(inString)){
    alert("phone numeber is unValid");
    return false;
}
return true;
}
