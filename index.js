const name = window.localStorage.getItem('currentUser');
document.getElementById('name').innerHTML = 'שלום ' + name;