const users = JSON.parse(localStorage.getItem('data')) || []; //// קישור בין הלוקאל לדף החדש 
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
