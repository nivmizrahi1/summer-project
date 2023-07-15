const users = JSON.parse(localStorage.getItem('data')) || []; //// קישור בין הלוקאל לדף החדש 
const username= document.getElementById ('username').value;
const password= document.getElementById('password').value;
if (indexof (username)!=indexof (password)) {
    alert ("there is a problem");
}
if (index == -1 || password != users[index].password || chance < 2) {
    alert("Wrong username or password!") };





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
