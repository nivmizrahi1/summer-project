


function clickBtn()
// אימות איימל ע"פ נקודה ושטרודל
{
    const username = document.getElementById("username").value;
    const testusername = users.some(function (n) {
        return username == n.username
    })


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

    //// שם פרטי פחות משתי אותיות לא מתקבל 
    const name = document.getElementById("name").value;
    if (name.length < 2) {
        alert("חייב מינימום שתי אותיות ");
        return false;
    }
    ////שם משפחה לפחות שתי אותיות 
    const familyname = document.getElementById("last name").value;
    if (familyname.length < 2) {
        alert("חייב לפחות שתי אותיות ");
        return false;
    }
    //// גיל מעל ל 18 או מתחת 65 
    const age = document.getElementById("age").value;
    if (age < 18 || age > 65) {
        alert("חייב מתחת לגיל 18 או מעיל 65 ");
        return false;
    }
    if (users) {
        window.localStorage.setItem('currentUser', username);
        window.location.href = 'index.html';
    } else {
        alert('wrong');
    }

}



document.getElementById("btn").addEventListener("click", clickBtn);