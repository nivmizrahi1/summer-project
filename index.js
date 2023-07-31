const userName = window.localStorage.getItem('currentUser');
document.getElementById('name').innerHTML = 'שלום ' + userName;