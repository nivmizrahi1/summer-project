function checkEnglish(txt) {
    for (let i = 0; i <= txt.length; i++) {
        if (!(txt.charAt(i) >= "A" && txt.charAt(i) <= "z"))
            return false;
    }
    return true;
}



function clickBtn()
// אימות איימל ע"פ נקודה ושטרודל
{
    const email = document.getElementById("email").value; //// == -1 זה אומר שהשטרולד לא נמצא 
    if (email.indexOf("@") == -1) {
        alert("הכנס אימייל תקין ");
    }
    {
        if (email.indexOf(".") == -1) {
            alert("הכנס אימייל תקין ");

        }
    }
    if (email.indexOf("@") != email.lastIndexOf("@")) {
        alert("אסור יותר משטורדל אחד");
        return false;
    }
   
//// שם משתמש מינימום 4 תווים 
const username=document.getElementById("username").value;
if (username.length<4) {
    alert ("חייב מינימום 4 תווים");
    return false;
}
//// שם פרטי פחות משתי אותיות לא מתקבל 
const name= document.getElementById("name").value;
if (name.length<2) {
    alert ("חייב מינימום שתי אותיות ");
    return false;
}
////שם משפחה לפחות שתי אותיות 
const familyname=document.getElementById("last name").value;
if (familyname.length<2) {
    alert ("חייב לפחות שתי אותיות ");
    return false;
} 
//// גיל מעל ל 18 או מתחת 65 
const age =document.getElementById ("age").value;
if (age<18||age>65) {
    alert ("חייב מתחת לגיל 18 או מעיל 65 ");
    return false;
}
////   מינימום 6 תווים לסיסמא ואותיות ומספרים 
const password = document.getElementById("password").value;

if (password.length < 6 || !(/[a-zA-Z]/.test(password)) || !(/[0-9]/.test(password))) {
    alert("סיסמא חייבת להכיל לפחות 6 תווים, המכילים אותיות ומספרים");
    return false; 
}

//// סיסמא 1 חייבת להיות תואמת ל 2 
const password2 =document.getElementById ("password2").value;
if (password2!=password) {
    alert ("שגיאה");
    return false; 
}













}



document.getElementById("btn").addEventListener("click", clickBtn);