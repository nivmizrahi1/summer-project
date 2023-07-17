const users = JSON.parse(localStorage.getItem('data')) || []; //// קישור בין הלוקאל לדף החדש 

document.getElementById('signin').addEventListener('click', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(function (item) {
        return item.username == username && item.password == password;
    });
    if (user) {
        alert('logged in');
    } else {
        alert('wrong');
    }


});





/*
const regiseredUsernames= users.map (u=>u.username);
const username= document.getElementById ('username').ariaValueMax;
if (regiseredUsernames.indexOf(username)>-1) {
    alert ('please choose another username'); 
}
var user={
    username:'dfsfd' , 
    password: 'asdasd'
}
users.push(user);
localStorage.setItem ('users', json.stringify(users));
*/