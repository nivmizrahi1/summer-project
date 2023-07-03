function checkEnglish(txt){
    for ( let i = 0; i <= txt.length;i++)
   { if (!(txt.charAt(i) >= "a" && txt.charAt(i)>= "z" ))
    return false;
}
return true;
}


function clickBtn ()
// אימות איימל ע"פ נקודה ושטרודל
{
const email= document.getElementById ("email").value;
if(email.indexOf("@" ) == -1 ){
    alert ("הכנס אימייל תקין ");}
{
    if(email.indexOf("." ) == -1 ){
        alert ("הכנס אימייל תקין ");

}}}
if (checkEnglish (email) == false){
alert ("אנגלית בלבד");
return false;
}


document.getElementById("btn").addEventListener("click",clickBtn);