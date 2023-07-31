const users = JSON.parse(localStorage.getItem('data')) || []; //// קישור בין הלוקאל לדף החדש 

document.getElementById('signin').addEventListener('click', function (e) {
    e.preventDefault(); //// מבטל את ההתנהגות של HTML 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(function (item) {
        return item.username == username && item.password == password;
    });
    if (user) {

        window.localStorage.setItem('remember', document.getElementById('rememberme').checked);
        window.location.href = 'index.html';
    } else {
        alert('wrong');
    }


});

//////// בשורה שלוש עשרה ללמוד את ווינדו 


////9 לשים את השם של קובץ HTML ו JS  
////10 להגדיר את הניווט בין הדפים. הניווט יעבוד כך: בדף ההרשמה אחרי שעבר בהצלחה הוא מעביר אותנו ישר ללוג אין




///// ברגע שהלוג אין בוצע בהצלחה ומצאתי את המשתמש מנווטים אותנו למסך הבית  פקודה לוקיישן וכך עובר לדף לוגין 
//// ברגע שהלכנו לדף הבית כותרת אייץ אחד הלו ניב למשל ומתחת גריד 
/// בדף הבית צריך גריד שלוש על שלוש שאני לוקח מהבוטסטראפ יש את הקוד מובנה להעתיק . לקחת את הלינק ממה שיעקב מצרף. 
////12 מימוש- טוטאל שעות .