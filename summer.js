function x () {
const email= document.getElementById ("email").value;
if(email.indexOf("@" ) == -1 ){
    alert ("הכנס אימייל תקין ");}
{
    if(email.indexOf("." ) == -1 ){
        alert ("הכנס אימייל תקין ");

}}}


document.getElementById("btn").addEventListener("click",x);