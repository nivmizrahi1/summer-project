const USER_NAME = window.localStorage.getItem('currentUser'); //// להחזיר את השם - מי מחובר כרגע לאתר 
console.log (USER_NAME);
var data= JSON.parse(localStorage.getItem('data')) || []; //// מביא את הנתונים של מי שרשום לאתר  
var expenses = JSON.parse(window.localStorage.getItem(USER_NAME + 'expenses')) || []; 
console.log(data);
var index=data.findIndex(function(s){ //// הפונקציה פיינד אינדקס מקבלת משתנה יוזר ניים שווה למשתמש שמחובר כרגע לאתר. שזה שווה למערך של הדאטה. 
    return USER_NAME==s.username
}) 
console.log (index);
document.getElementById("email").value =  data[index].email
document.getElementById("name").value = data[index].name
document.getElementById("last name").value = data[index].lastname
document.getElementById("age").value = data[index].age
function clickBtn(){


// אימות איימל ע"פ נקודה ושטרודל


    let email = document.getElementById("email").value; //// == -1 זה אומר שהשטרולד לא נמצא 
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

    //// שם פרטי פחות משתי אותיות לא מתקבל 
    let name = document.getElementById("name").value;
    if (name.length < 2) {
        alert("חייב מינימום שתי אותיות ");
        return false;
    }
    ////שם משפחה לפחות שתי אותיות 
    let familyname = document.getElementById("last name").value;
    if (familyname.length < 2) {
        alert("חייב לפחות שתי אותיות ");
        return false;
    }
    //// גיל מעל ל 18 או מתחת 65 
    let age = document.getElementById("age").value;
    if (age < 18 || age > 65) {
        alert("חייב מתחת לגיל 18 או מעיל 65 ");
        return false;
    }
    else {
       data[index].email=email
       data[index].name=name
       data[index].lastname=familyname
       data[index].age=age
       console.log(data[index]);
        var jason = JSON.stringify(data);
        localStorage.setItem("data", jason);

    }

}

document.getElementById("btn").addEventListener("click", clickBtn);
