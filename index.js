const userName = window.localStorage.getItem('currentUser');
document.getElementById('name').innerHTML = 'שלום ' + userName;
const REGULAR_HOURS = 9;

function diff_hours(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));

}


const shifts = Array.from(new Array(8)).map(_ => {
    const date = new Date();
    const dayInMoth = Math.ceil(Math.random() * 27)
    const startDate = new Date(date.getFullYear(), date.getMonth(), dayInMoth, 10);
    const endDate = new Date(date.getFullYear(), date.getMonth(), dayInMoth, 20);

    return {
        totalHours: diff_hours(endDate, startDate),
        regularHours: Math.min(REGULAR_HOURS, diff_hours(endDate, startDate)),
        extraHours: Math.max(0, diff_hours(endDate, startDate) - REGULAR_HOURS),
        startDate: startDate,
        endDate: endDate
    }
});
console.log(shifts);

document.getElementById('totalHours').innerHTML = 'Total ' + shifts.reduce(function (acc, curr) {
    return acc + curr.totalHours;
}, 0);

/* Expenses management */
const expenses = JSON.parse(localStorage.getItem(userName + 'expenses'));
document.getElementById('totalExpenses').innerHTML = 'Total ' + expenses.reduce(function (acc, curr) {
    return acc + curr.sum;
}, 0);



// const userName = window.localStorage.getItem('currentUser'); - השורה הזו משמשת לקבלת השם של המשתמש הנוכחי מתוך Local Storage. השם מאוחסן במשתנה userName. 
// document.getElementById('name').innerHTML = 'שלום ' + userName; - פה אתה משנה את התוכן של אלמנט ב-HTML שיש לו id בשם 'name' על ידי הוספת המחרוזת "שלום" ואז את השם של המשתמש.
//const REGULAR_HOURS = 9; - נראה שאתה מגדיר ערך קבוע שמייצג את מספר השעות הרגילות במשמרת. בדוגמה הזו הערך הוא 9 שעות.
// function diff_hours(dt2, dt1) {...} - זו פונקציה שמקבלת שני אובייקטים תאריך (Date) ומחשבת את ההפרש בשעות ביניהם. היא מחזירה את ההפרש בשעות כשהיא משתמשת בפער בזמן ביניים.
// const shifts = Array.from(new Array(8)).map(_ => {...} - זה נראה כמו יצירת מערך של 8 "משמרות" באמצעות map. בכל משמרת, אתה יוצר תאריכי התחלה וסיום אקראיים באותו היום בין השעות 10:00 ל-20:00 ואז מחשב את השעות הרגילות והשעות הנוספות במשמרת באמצעות הפונקציה diff_hours. המידע על המשמרות מאוחסן במערך shifts.
// console.log(shifts); - כאן אתה מדפיס את המידע שמאוחסן במערך shifts בקונסול.